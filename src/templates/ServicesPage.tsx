import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const services = [
  {
    id: 'local-seo',
    title: 'Local SEO',
    description:
      'Get found by customers in your area. We optimize your Google Business Profile, build local citations, manage reviews, and ensure your business appears in local map packs. Perfect for brick-and-mortar businesses and service-area companies.',
    image: '/assets/images/feature.svg',
    imageAlt: 'Local SEO services for small businesses',
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    description:
      'We optimize every element of your web pages for maximum search visibility. From title tags and meta descriptions to header structure and internal linking, we ensure your content is fully optimized for your target keywords.',
    image: '/assets/images/feature2.svg',
    imageAlt: 'On-page SEO optimization',
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    description:
      'A fast, crawlable, and error-free website is the foundation of good SEO. We fix site speed issues, improve Core Web Vitals, resolve crawl errors, implement structured data, and ensure your site is mobile-friendly.',
    image: '/assets/images/feature3.svg',
    imageAlt: 'Technical SEO services',
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description:
      'Attract your ideal customers with SEO-optimized content that ranks and converts. We create blog posts, landing pages, and resource guides that target the keywords your audience is searching for.',
    image: '/assets/images/feature.svg',
    imageAlt: 'Content marketing for small businesses',
  },
  {
    id: 'link-building',
    title: 'Link Building',
    description:
      "Build your website's authority with high-quality backlinks from relevant, trustworthy websites. Our white-hat link building strategies help improve your domain authority and search rankings safely.",
    image: '/assets/images/feature2.svg',
    imageAlt: 'Link building services',
  },
  {
    id: 'seo-audits',
    title: 'SEO Audits',
    description:
      "Get a comprehensive analysis of your website's SEO health. Our detailed audit covers technical issues, on-page optimization, content gaps, backlink profile, and competitor analysis with actionable recommendations.",
    image: '/assets/images/feature3.svg',
    imageAlt: 'Comprehensive SEO audit',
  },
];

const ServicesPage = () => (
  <>
    <Background color="bg-muted">
      <Section yPadding="pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground">
            Complete SEO Services for Small Businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Everything your small business needs to rank higher, drive more
            traffic, and convert visitors into customers.
          </p>
        </div>
      </Section>
    </Background>

    {services.map((service, index) => (
      <Section key={service.id} id={service.id}>
        <VerticalFeatureRow
          title={service.title}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
          reverse={index % 2 === 1}
        />
      </Section>
    ))}

    <Section>
      <CTABanner
        title="Ready to boost your search rankings?"
        subtitle="See our affordable SEO packages."
        button={
          <Link href="/pricing/">
            <Button>View Pricing</Button>
          </Link>
        }
      />
    </Section>
  </>
);

export { ServicesPage };
