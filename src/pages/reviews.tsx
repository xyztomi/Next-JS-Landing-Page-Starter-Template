import type { GetStaticProps } from 'next';

import { PageLayout } from '@/layout/PageLayout';
import { ReviewsPage } from '@/templates/ReviewsPage';
import { AppConfig } from '@/utils/AppConfig';
import type { BlogPostMeta } from '@/utils/blog';
import { getRecentPosts } from '@/utils/blog';

type IReviewsProps = {
  recentPosts: BlogPostMeta[];
};

const Reviews = (props: IReviewsProps) => (
  <PageLayout
    title="Client Reviews | SEO Services for Small Business"
    description="Read real reviews from small business owners who trust our affordable SEO services. 5-star rated with 48+ verified client testimonials."
    canonical={`${AppConfig.url}/reviews/`}
    recentPosts={props.recentPosts}
  >
    <ReviewsPage />
  </PageLayout>
);

export const getStaticProps: GetStaticProps<IReviewsProps> = () => {
  const recentPosts = getRecentPosts(5);
  return { props: { recentPosts } };
};

export default Reviews;
