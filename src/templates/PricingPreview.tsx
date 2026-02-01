import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';

const PricingPreview = () => (
  <Section
    title="Affordable SEO Packages for Small Business"
    description="Transparent pricing with no long-term contracts. Choose the plan that fits your budget."
  >
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <PricingCard
        name="Starter"
        price="$499"
        description="Perfect for new businesses building their online presence."
        features={[
          'SEO audit & strategy',
          '5 keyword targets',
          'On-page optimization',
          'Monthly reporting',
          'Google Business Profile setup',
        ]}
        ctaHref="/pricing/"
        ctaText="View Details"
      />
      <PricingCard
        name="Growth"
        price="$999"
        description="For businesses ready to accelerate their organic growth."
        features={[
          'Everything in Starter',
          '15 keyword targets',
          'Content creation (2 posts/mo)',
          'Link building (5 links/mo)',
          'Technical SEO fixes',
          'Competitor analysis',
        ]}
        highlighted
        ctaHref="/pricing/"
        ctaText="View Details"
      />
      <PricingCard
        name="Pro"
        price="$1,999"
        description="Comprehensive SEO for businesses serious about dominating search."
        features={[
          'Everything in Growth',
          '30+ keyword targets',
          'Content creation (4 posts/mo)',
          'Link building (10 links/mo)',
          'Advanced analytics',
          'Priority support',
        ]}
        ctaHref="/pricing/"
        ctaText="View Details"
      />
    </div>
  </Section>
);

export { PricingPreview };
