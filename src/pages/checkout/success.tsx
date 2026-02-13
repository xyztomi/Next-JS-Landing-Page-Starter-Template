import type { GetStaticProps } from 'next';

import { PageLayout } from '@/layout/PageLayout';
import { CheckoutSuccessPage } from '@/templates/CheckoutSuccessPage';
import { AppConfig } from '@/utils/AppConfig';
import type { BlogPostMeta } from '@/utils/blog';
import { getRecentPosts } from '@/utils/blog';

type ICheckoutSuccessProps = {
  recentPosts: BlogPostMeta[];
};

const CheckoutSuccess = (props: ICheckoutSuccessProps) => (
  <PageLayout
    title="Payment Successful | SEO Services for Small Biz"
    description="Your payment was successful. Welcome aboard!"
    canonical={`${AppConfig.url}/checkout/success/`}
    noindex
    recentPosts={props.recentPosts}
  >
    <CheckoutSuccessPage />
  </PageLayout>
);

export const getStaticProps: GetStaticProps<ICheckoutSuccessProps> = () => {
  const recentPosts = getRecentPosts(5);
  return { props: { recentPosts } };
};

export default CheckoutSuccess;
