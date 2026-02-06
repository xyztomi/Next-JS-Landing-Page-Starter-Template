import { PageLayout } from '../layout/PageLayout';
import { JsonLd } from '../seo/JsonLd';
import {
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  reviewSchema,
  serviceOfferingSchema,
} from '../seo/schemas';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { FAQ, faqs } from './FAQ';
import { Hero } from './Hero';
import { HomeServices } from './HomeServices';
import { HowItWorks } from './HowItWorks';
import { PricingPreview } from './PricingPreview';
import { Testimonials } from './Testimonials';
import { TrustBar } from './TrustBar';

const homeReviews = [
  {
    name: 'Amanda Rivera',
    body: 'Our cost per lead dropped by 48% in the first month. They finally made our online marketing predictable and affordable.',
    ratingValue: 5,
  },
  {
    name: 'Jason Park',
    body: "They treat our budget like it's their own. Organic traffic up 240% year over year. Best investment we've made in our small business.",
    ratingValue: 5,
  },
  {
    name: 'Sarah Mitchell',
    body: 'The landing page optimizations alone paid for the entire engagement. Our conversion rate increased by 156%.',
    ratingValue: 5,
  },
];

const Base = () => (
  <PageLayout
    title={AppConfig.title}
    description={AppConfig.description}
    canonical={`${AppConfig.url}/`}
    jsonLd={
      <>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={serviceOfferingSchema()} />
        <JsonLd data={faqSchema(faqs)} />
        <JsonLd data={reviewSchema(homeReviews)} />
      </>
    }
  >
    <Hero />
    <TrustBar />
    <HomeServices />
    <HowItWorks />
    <PricingPreview />
    <Testimonials />
    <FAQ />
    <Banner />
  </PageLayout>
);

export { Base };
