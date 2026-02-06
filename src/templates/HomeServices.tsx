import {
  BarChart3,
  FileText,
  Link as LinkIcon,
  MapPin,
  Pencil,
  Settings,
} from 'lucide-react';

import { Section } from '../layout/Section';
import { ServiceCard } from '../service/ServiceCard';

const HomeServices = () => (
  <Section
    id="services"
    title="Affordable SEO Services That Help Small Businesses Grow"
    description="From local search domination to technical optimization, our SEO packages for small business cover everything you need to outrank your competition."
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ServiceCard
        icon={<MapPin className="size-10" strokeWidth={1.5} />}
        title="Local SEO"
        id="local-seo"
        description="Dominate local search results. Get found by customers in your area with Google Business Profile optimization and local citations."
        expandedDescription="We optimize your Google Business Profile, build local citations, manage reviews, and ensure your business appears in local map packs. Perfect for brick-and-mortar businesses and service-area companies looking to attract nearby customers."
      />
      <ServiceCard
        icon={<FileText className="size-10" strokeWidth={1.5} />}
        title="On-Page SEO"
        id="on-page-seo"
        description="Optimize every page for maximum visibility. We handle title tags, meta descriptions, headers, and content optimization."
        expandedDescription="We optimize every element of your web pages for maximum search visibility. From title tags and meta descriptions to header structure and internal linking, we ensure your content is fully optimized for your target keywords."
      />
      <ServiceCard
        icon={<Settings className="size-10" strokeWidth={1.5} />}
        title="Technical SEO"
        id="technical-seo"
        description="Fix site speed, crawlability, and indexing issues. Ensure search engines can properly access and understand your website."
        expandedDescription="A fast, crawlable, and error-free website is the foundation of good SEO. We fix site speed issues, improve Core Web Vitals, resolve crawl errors, implement structured data, and ensure your site is mobile-friendly."
      />
      <ServiceCard
        icon={<Pencil className="size-10" strokeWidth={1.5} />}
        title="Content Marketing"
        id="content-marketing"
        description="Attract and engage your target audience with SEO-optimized blog posts, articles, and landing pages that rank."
        expandedDescription="Attract your ideal customers with SEO-optimized content that ranks and converts. We create blog posts, landing pages, and resource guides that target the keywords your audience is searching for."
      />
      <ServiceCard
        icon={<LinkIcon className="size-10" strokeWidth={1.5} />}
        title="Link Building"
        id="link-building"
        description="Build authority with high-quality backlinks from relevant websites. Improve your domain authority and search rankings."
        expandedDescription="Build your website's authority with high-quality backlinks from relevant, trustworthy websites. Our white-hat link building strategies help improve your domain authority and search rankings safely."
      />
      <ServiceCard
        icon={<BarChart3 className="size-10" strokeWidth={1.5} />}
        title="SEO Audits"
        id="seo-audits"
        description="Get a comprehensive analysis of your website's SEO health with actionable recommendations to improve rankings."
        expandedDescription="Get a comprehensive analysis of your website's SEO health. Our detailed audit covers technical issues, on-page optimization, content gaps, backlink profile, and competitor analysis with actionable recommendations."
      />
    </div>
  </Section>
);

export { HomeServices };
