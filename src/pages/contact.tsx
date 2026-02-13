import type { GetStaticProps } from 'next';

import { PageLayout } from '@/layout/PageLayout';
import { ContactPage } from '@/templates/ContactPage';
import { AppConfig } from '@/utils/AppConfig';
import type { BlogPostMeta } from '@/utils/blog';
import { getRecentPosts } from '@/utils/blog';

type IContactProps = {
  recentPosts: BlogPostMeta[];
};

const Contact = (props: IContactProps) => (
  <PageLayout
    title="Contact Us - Get a Free SEO Audit | SEO Services for Small Biz"
    description="Contact our SEO team for a free website audit. Get actionable recommendations to improve your search rankings. No obligation, no cost. We respond within 24 hours."
    canonical={`${AppConfig.url}/contact/`}
    recentPosts={props.recentPosts}
  >
    <ContactPage />
  </PageLayout>
);

export const getStaticProps: GetStaticProps<IContactProps> = () => {
  const recentPosts = getRecentPosts(5);
  return { props: { recentPosts } };
};

export default Contact;
