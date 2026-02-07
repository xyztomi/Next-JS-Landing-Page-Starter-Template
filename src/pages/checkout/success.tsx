import { PageLayout } from '@/layout/PageLayout';
import { CheckoutSuccessPage } from '@/templates/CheckoutSuccessPage';
import { AppConfig } from '@/utils/AppConfig';

const CheckoutSuccess = () => (
  <PageLayout
    title="Payment Successful | SEO Services for Small Biz"
    description="Your payment was successful. Welcome aboard!"
    canonical={`${AppConfig.url}/checkout/success/`}
    noindex
  >
    <CheckoutSuccessPage />
  </PageLayout>
);

export default CheckoutSuccess;
