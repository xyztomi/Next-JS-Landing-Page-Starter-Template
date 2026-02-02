import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';

const PricingPreview = () => (
  <Section
    title="Affordable SEO Packages for Small Business"
    description="Transparent pricing with no long-term contracts. Month-to-month plans with a 30-day money-back guarantee."
  >
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <PricingCard
        name="SEO Essentials"
        price="$697"
        description="Perfect for small businesses starting their SEO journey."
        features={[
          'Complete technical SEO audit',
          'On-page optimization',
          '5 keyword targets',
          'Google Business Profile setup',
          'Monthly ranking reports',
        ]}
        ctaHref="/contact/#free-audit"
        ctaText="Get Started"
      />
      <PricingCard
        name="SEO Pro"
        price="$997"
        description="Full-service SEO for small businesses ready to grow."
        features={[
          'Everything in Essentials',
          'Content strategy & creation',
          'Backlink building & outreach',
          'Ongoing improvements & updates',
          'Weekly performance reports',
          'Dedicated account manager',
        ]}
        highlighted
        ctaHref="/contact/#free-audit"
        ctaText="Get Started"
      />
      <PricingCard
        name="SEO Growth"
        price="$1,497"
        description="Aggressive SEO for businesses serious about dominating search."
        features={[
          'Everything in Pro',
          '15+ keyword targets',
          'Advanced content creation',
          'Competitor analysis',
          'Priority support',
          'WhatsApp/Slack support',
        ]}
        ctaHref="/contact/#free-audit"
        ctaText="Get Started"
      />
    </div>
  </Section>
);

export { PricingPreview };
