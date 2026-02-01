import { PageLayout } from '@/layout/PageLayout';
import { AboutPage } from '@/templates/AboutPage';
import { AppConfig } from '@/utils/AppConfig';

const About = () => (
  <PageLayout
    title="About SEO Services for Small Biz - Our Story & Team"
    description="Learn about our mission to make professional SEO accessible and affordable for small businesses. Meet our team of experienced SEO specialists."
    canonical={`${AppConfig.url}/about/`}
  >
    <AboutPage />
  </PageLayout>
);

export default About;
