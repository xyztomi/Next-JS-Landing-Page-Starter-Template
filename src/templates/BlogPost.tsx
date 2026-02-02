import { BlogAuthor } from '../blog/BlogAuthor';
import { Section } from '../layout/Section';
import type { BlogPost as IBlogPostData } from '../utils/blog';

type IBlogPostProps = {
  post: IBlogPostData;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <article className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          {props.post.title}
        </h1>
        <BlogAuthor name={props.post.author} date={props.post.date} />
      </header>

      <div
        className="prose prose-lg prose-headings:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
        dangerouslySetInnerHTML={{ __html: props.post.content }}
      />
    </article>
  </Section>
);

export { BlogPost };
