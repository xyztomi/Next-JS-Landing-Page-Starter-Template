import { PageLayout } from '@/layout/PageLayout';
import { ServicesPage } from '@/templates/ServicesPage';
import { AppConfig } from '@/utils/AppConfig';

const Services = () => (
  <PageLayout
    title="SEO Services for Small Businesses - Complete SEO Solutions"
    description="From local SEO and on-page optimization to link building and content marketing, our complete SEO services help small businesses rank higher and grow online."
    canonical={`${AppConfig.url}/services/`}
  >
    <ServicesPage />
  </PageLayout>
);

export default Services;
