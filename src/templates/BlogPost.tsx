import { BlogAuthor } from '../blog/BlogAuthor';
import { Section } from '../layout/Section';
import type { BlogPost as IBlogPostData } from '../utils/blog';

type IBlogPostProps = {
  post: IBlogPostData;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <article className="mx-auto max-w-3xl">
      <header className="mb-6 sm:mb-8">
        <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          {props.post.title}
        </h1>
        <BlogAuthor name={props.post.author} date={props.post.date} />
      </header>

      <div
        className="prose prose-sm prose-headings:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline sm:prose-base md:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: props.post.content }}
      />
    </article>
  </Section>
);

export { BlogPost };
