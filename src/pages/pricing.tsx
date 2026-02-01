import { PageLayout } from '@/layout/PageLayout';
import { PricingPage } from '@/templates/PricingPage';
import { AppConfig } from '@/utils/AppConfig';

const Pricing = () => (
  <PageLayout
    title="Affordable SEO Pricing for Small Business - Plans from $499/mo"
    description="Transparent SEO pricing designed for small businesses. Choose from Starter ($499/mo), Growth ($999/mo), or Pro ($1,999/mo) plans. No long-term contracts."
    canonical={`${AppConfig.url}/pricing/`}
  >
    <PricingPage />
  </PageLayout>
);

export default Pricing;
