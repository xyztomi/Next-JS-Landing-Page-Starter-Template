import type { GetStaticPaths, GetStaticProps } from 'next';

import { PageLayout } from '@/layout/PageLayout';
import { Breadcrumbs } from '@/navigation/Breadcrumbs';
import { JsonLd } from '@/seo/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/seo/schemas';
import { BlogPost } from '@/templates/BlogPost';
import { AppConfig } from '@/utils/AppConfig';
import type { BlogPost as IBlogPostData, BlogPostMeta } from '@/utils/blog';
import { getAllPosts, getPostBySlug, getRecentPosts } from '@/utils/blog';

type IBlogPostPageProps = {
  post: IBlogPostData;
  recentPosts: BlogPostMeta[];
};

const BlogPostPage = (props: IBlogPostPageProps) => (
  <PageLayout
    title={`${props.post.title} | SEO Services for Small Biz`}
    description={props.post.description}
    canonical={`${AppConfig.url}/blog/${props.post.slug}/`}
    ogType="article"
    recentPosts={props.recentPosts}
    jsonLd={
      <>
        <JsonLd
          data={articleSchema(
            props.post.title,
            props.post.description,
            `${AppConfig.url}/blog/${props.post.slug}/`,
            props.post.date,
            props.post.author,
          )}
        />
        <JsonLd
          data={breadcrumbSchema([
            { name: 'Blog', url: `${AppConfig.url}/blog/` },
            { name: props.post.title },
          ])}
        />
      </>
    }
  >
    <Breadcrumbs
      items={[{ label: 'Blog', href: '/blog/' }, { label: props.post.title }]}
    />
    <BlogPost post={props.post} />
  </PageLayout>
);

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBlogPostPageProps> = async (
  context,
) => {
  const slug = (context.params?.slug as string) || '';
  const post = await getPostBySlug(slug);
  const recentPosts = getRecentPosts(5);
  return { props: { post, recentPosts } };
};

export default BlogPostPage;
