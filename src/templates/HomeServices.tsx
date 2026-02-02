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
    title="Complete SEO Packages for Small Business"
    description="Everything you need to improve your search rankings and drive more organic traffic to your website."
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ServiceCard
        icon={<MapPin className="size-10" strokeWidth={1.5} />}
        title="Local SEO"
        description="Dominate local search results. Get found by customers in your area with Google Business Profile optimization and local citations."
        href="/services/#local-seo"
      />
      <ServiceCard
        icon={<FileText className="size-10" strokeWidth={1.5} />}
        title="On-Page SEO"
        description="Optimize every page for maximum visibility. We handle title tags, meta descriptions, headers, and content optimization."
        href="/services/#on-page-seo"
      />
      <ServiceCard
        icon={<Settings className="size-10" strokeWidth={1.5} />}
        title="Technical SEO"
        description="Fix site speed, crawlability, and indexing issues. Ensure search engines can properly access and understand your website."
        href="/services/#technical-seo"
      />
      <ServiceCard
        icon={<Pencil className="size-10" strokeWidth={1.5} />}
        title="Content Marketing"
        description="Attract and engage your target audience with SEO-optimized blog posts, articles, and landing pages that rank."
        href="/services/#content-marketing"
      />
      <ServiceCard
        icon={<LinkIcon className="size-10" strokeWidth={1.5} />}
        title="Link Building"
        description="Build authority with high-quality backlinks from relevant websites. Improve your domain authority and search rankings."
        href="/services/#link-building"
      />
      <ServiceCard
        icon={<BarChart3 className="size-10" strokeWidth={1.5} />}
        title="SEO Audits"
        description="Get a comprehensive analysis of your website's SEO health with actionable recommendations to improve rankings."
        href="/services/#seo-audits"
      />
    </div>
  </Section>
);

export { HomeServices };
