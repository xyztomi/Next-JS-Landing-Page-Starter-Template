import type { GetStaticProps } from 'next';

import { PageLayout } from '@/layout/PageLayout';
import { AboutPage } from '@/templates/AboutPage';
import { AppConfig } from '@/utils/AppConfig';
import type { BlogPostMeta } from '@/utils/blog';
import { getRecentPosts } from '@/utils/blog';

type IAboutProps = {
  recentPosts: BlogPostMeta[];
};

const About = (props: IAboutProps) => (
  <PageLayout
    title="About Us | Trusted Small Business SEO Agency"
    description="Learn about our mission to make professional SEO accessible and affordable for small businesses. 150+ clients served. 96% retention rate. 3.5X average ROAS."
    canonical={`${AppConfig.url}/about/`}
    recentPosts={props.recentPosts}
  >
    <AboutPage />
  </PageLayout>
);

export const getStaticProps: GetStaticProps<IAboutProps> = () => {
  const recentPosts = getRecentPosts(5);
  return { props: { recentPosts } };
};

export default About;
