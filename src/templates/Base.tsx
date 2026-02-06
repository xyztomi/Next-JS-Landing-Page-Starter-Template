import { PageLayout } from '../layout/PageLayout';
import { JsonLd } from '../seo/JsonLd';
import {
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  reviewSchema,
} from '../seo/schemas';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { FAQ } from './FAQ';
import { Hero } from './Hero';
import { HomeServices } from './HomeServices';
import { HowItWorks } from './HowItWorks';
import { PricingPreview } from './PricingPreview';
import { Testimonials } from './Testimonials';
import { TrustBar } from './TrustBar';

const homeFaqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'Most small businesses start seeing measurable improvements in rankings and traffic within 3-6 months.',
  },
  {
    question: 'What makes your SEO packages affordable for small businesses?',
    answer:
      'We specialize in small business SEO, which allows us to streamline our processes and offer competitive pricing starting at $697/month.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer:
      'No. We offer month-to-month plans with no long-term contracts and a 30-day money-back guarantee.',
  },
  {
    question: 'What is included in the free SEO audit?',
    answer:
      'Our free audit covers technical SEO issues, on-page optimization opportunities, keyword analysis, competitor benchmarking, and a prioritized action plan.',
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer:
      'We have experience with over 50 different industries, from law firms and dental practices to e-commerce stores and home service providers.',
  },
  {
    question: 'How do you measure and report on SEO progress?',
    answer:
      'We provide detailed weekly reports covering keyword rankings, organic traffic, backlink growth, and conversion data.',
  },
];

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
        <JsonLd data={faqSchema(homeFaqs)} />
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
