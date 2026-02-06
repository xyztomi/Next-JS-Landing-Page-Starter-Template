import { PageLayout } from '@/layout/PageLayout';
import { AboutPage } from '@/templates/AboutPage';
import { AppConfig } from '@/utils/AppConfig';

const About = () => (
  <PageLayout
    title="About Us | Trusted Small Business SEO Agency"
    description="Learn about our mission to make professional SEO accessible and affordable for small businesses. 150+ clients served. 96% retention rate. 3.5X average ROAS."
    canonical={`${AppConfig.url}/about/`}
  >
    <AboutPage />
  </PageLayout>
);

export default About;
