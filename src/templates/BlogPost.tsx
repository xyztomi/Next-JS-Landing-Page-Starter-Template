import Link from 'next/link';

import { BlogAuthor } from '../blog/BlogAuthor';
import { Section } from '../layout/Section';
import type { BlogPost as IBlogPostData } from '../utils/blog';

type IBlogPostProps = {
  post: IBlogPostData;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 sm:mb-10">
        <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          {props.post.title}
        </h1>
        <BlogAuthor name={props.post.author} date={props.post.date} />
      </header>

      <div
        className="prose prose-slate max-w-none sm:prose-lg prose-headings:font-bold prose-headings:text-foreground prose-h2:mt-10 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-h3:mt-8 prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:my-4 prose-li:text-muted-foreground prose-li:marker:text-accent"
        dangerouslySetInnerHTML={{ __html: props.post.content }}
      />

      <footer className="mt-12 border-t border-gray-200 pt-8">
        <div className="rounded-lg bg-accent/10 p-6 sm:p-8">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Ready to grow your business?
          </h3>
          <p className="mb-4 text-muted-foreground">
            Get a free SEO audit and discover how we can help you rank higher
            and attract more customers.
          </p>
          <Link
            href="/contact/#free-audit"
            className="inline-block rounded-md bg-accent px-5 py-2.5 font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Get Your Free Audit
          </Link>
        </div>
      </footer>
    </article>
  </Section>
);

export { BlogPost };
