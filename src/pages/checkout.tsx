import { PageLayout } from '@/layout/PageLayout';
import { CheckoutPage } from '@/templates/CheckoutPage';
import { AppConfig } from '@/utils/AppConfig';

const Checkout = () => (
  <PageLayout
    title="Checkout | SEO Services for Small Biz"
    description="Complete your purchase and get started with SEO services for your small business."
    canonical={`${AppConfig.url}/checkout/`}
    noindex
  >
    <CheckoutPage />
  </PageLayout>
);

export default Checkout;
