import { PageLayout } from '@/layout/PageLayout';
import { PricingPage } from '@/templates/PricingPage';
import { AppConfig } from '@/utils/AppConfig';

const Pricing = () => (
  <PageLayout
    title="Affordable SEO Packages for Small Business - Plans from $697/mo"
    description="Transparent SEO pricing designed for small businesses. Choose from Essentials ($697/mo), Pro ($997/mo), or Growth ($1,497/mo) packages. No long-term contracts. 30-day money-back guarantee."
    canonical={`${AppConfig.url}/pricing/`}
  >
    <PricingPage />
  </PageLayout>
);

export default Pricing;
