import type { GetStaticProps } from 'next';

import { PageLayout } from '@/layout/PageLayout';
import { CheckoutPage } from '@/templates/CheckoutPage';
import { AppConfig } from '@/utils/AppConfig';
import type { BlogPostMeta } from '@/utils/blog';
import { getRecentPosts } from '@/utils/blog';

type ICheckoutProps = {
  recentPosts: BlogPostMeta[];
};

const Checkout = (props: ICheckoutProps) => (
  <PageLayout
    title="Checkout | SEO Services for Small Biz"
    description="Complete your purchase and get started with SEO services for your small business."
    canonical={`${AppConfig.url}/checkout/`}
    noindex
    recentPosts={props.recentPosts}
  >
    <CheckoutPage />
  </PageLayout>
);

export const getStaticProps: GetStaticProps<ICheckoutProps> = () => {
  const recentPosts = getRecentPosts(5);
  return { props: { recentPosts } };
};

export default Checkout;
