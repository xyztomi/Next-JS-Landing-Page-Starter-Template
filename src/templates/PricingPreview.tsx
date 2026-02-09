import Link from 'next/link';

import { Accordion } from '@/components/ui/accordion';

import { Button } from '../button/Button';
import { FAQItem } from '../faq/FAQItem';
import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingTable } from '../pricing/PricingTable';

const pricingFaqs = [
  {
    question: 'Can I switch SEO packages later?',
    answer:
      'Yes, you can upgrade or downgrade your SEO package at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a setup fee?',
    answer:
      'No. There are no setup fees or hidden costs. The monthly price listed is all you pay.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, ACH bank transfers, and can also invoice for quarterly or annual payments.',
  },
  {
    question: 'Do you offer custom SEO packages for small businesses?',
    answer:
      "Yes. If our standard SEO packages don't fit your needs, contact us for a custom plan tailored to your business goals and budget.",
  },
];

const PricingPreview = () => (
  <>
    <Section
      id="pricing"
      title="Low-Cost SEO Packages Built for Small Business Budgets"
      description="Transparent pricing with no long-term contracts. Every plan includes a 30-day money-back guarantee. Choose the affordable SEO package that fits your small business."
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Guaranteed Google Rankings Improvement — Or Your Money Back
        </span>
      </div>
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
          ctaHref="/checkout/?plan=essentials"
          ctaText="Buy Now"
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
          ctaHref="/checkout/?plan=pro"
          ctaText="Buy Now"
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
          ctaHref="/checkout/?plan=growth"
          ctaText="Buy Now"
        />
      </div>
    </Section>

    <Section title="Feature Comparison">
      <PricingTable />
    </Section>

    <Section title="Pricing Questions">
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          {pricingFaqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              value={`pricing-faq-${index}`}
            />
          ))}
        </Accordion>
      </div>
      <div className="mt-8 text-center md:mt-12">
        <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
          Not sure which SEO package is right for you?
        </h3>
        <p className="mb-6 text-base text-muted-foreground sm:text-lg md:mb-8 md:text-xl">
          Get a free SEO audit and we&apos;ll recommend the best package for
          your small business.
        </p>
        <Link href="/contact/#free-audit">
          <Button xl>Get Your Free Audit</Button>
        </Link>
      </div>
    </Section>
  </>
);

export { PricingPreview };
