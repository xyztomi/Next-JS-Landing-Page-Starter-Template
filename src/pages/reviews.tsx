import { PageLayout } from '@/layout/PageLayout';
import { ReviewsPage } from '@/templates/ReviewsPage';
import { AppConfig } from '@/utils/AppConfig';

const Reviews = () => (
  <PageLayout
    title="Client Reviews | SEO Services for Small Business"
    description="Read real reviews from small business owners who trust our affordable SEO services. 5-star rated with 48+ verified client testimonials."
    canonical={`${AppConfig.url}/reviews/`}
  >
    <ReviewsPage />
  </PageLayout>
);

export default Reviews;
