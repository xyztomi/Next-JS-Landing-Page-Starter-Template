import type { GetStaticProps } from 'next';

import { PageLayout } from '@/layout/PageLayout';
import { BlogIndex } from '@/templates/BlogIndex';
import { AppConfig } from '@/utils/AppConfig';
import type { BlogPostMeta } from '@/utils/blog';
import { getAllPosts } from '@/utils/blog';

type IBlogPageProps = {
  posts: BlogPostMeta[];
};

const Blog = (props: IBlogPageProps) => (
  <PageLayout
    title="SEO Tips & Guides for Small Business Owners | SEO Services for Small Biz"
    description="Practical SEO tips, guides, and strategies to help small business owners improve their search rankings and grow online."
    canonical={`${AppConfig.url}/blog/`}
  >
    <BlogIndex posts={props.posts} />
  </PageLayout>
);

export const getStaticProps: GetStaticProps<IBlogPageProps> = () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default Blog;
