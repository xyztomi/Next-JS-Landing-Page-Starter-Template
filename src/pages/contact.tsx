import { PageLayout } from '@/layout/PageLayout';
import { ContactPage } from '@/templates/ContactPage';
import { AppConfig } from '@/utils/AppConfig';

const Contact = () => (
  <PageLayout
    title="Contact Us - Get a Free SEO Audit | SEO Services for Small Biz"
    description="Contact our SEO team for a free website audit. Get actionable recommendations to improve your search rankings. No obligation, no cost."
    canonical={`${AppConfig.url}/contact/`}
  >
    <ContactPage />
  </PageLayout>
);

export default Contact;
