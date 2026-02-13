import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
  content: string;
};

export type BlogPostMeta = Omit<BlogPost, 'content'>;

export function getRecentPosts(count: number = 5): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}

export function getAllPosts(): BlogPostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((name) => name.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        author: data.author as string,
        keywords: (data.keywords as string[]) || [],
      };
    });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    author: data.author as string,
    keywords: (data.keywords as string[]) || [],
    content: contentHtml,
  };
}
