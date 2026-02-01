import { Background } from '../background/Background';
import { BlogCard } from '../blog/BlogCard';
import { Section } from '../layout/Section';
import type { BlogPostMeta } from '../utils/blog';

type IBlogIndexProps = {
  posts: BlogPostMeta[];
};

const BlogIndex = (props: IBlogIndexProps) => (
  <>
    <Background color="bg-gray-100">
      <Section yPadding="pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-navy-700">
            SEO Tips & Guides for Small Business Owners
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Practical SEO advice to help your small business rank higher and
            grow online.
          </p>
        </div>
      </Section>
    </Background>

    <Section>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {props.posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            author={post.author}
          />
        ))}
      </div>
    </Section>
  </>
);

export { BlogIndex };
