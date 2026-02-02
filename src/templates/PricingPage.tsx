import Link from 'next/link';

import { Accordion } from '@/components/ui/accordion';

import { Background } from '../background/Background';
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

const PricingPage = () => (
  <>
    <Background color="bg-muted">
      <Section yPadding="pt-12 pb-10 sm:pt-16 md:pt-20 md:pb-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Affordable SEO Packages for Small Business
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
            Transparent SEO pricing with no long-term contracts. Choose the
            package that fits your budget and watch your business grow.
          </p>
        </div>
      </Section>
    </Background>

    <Section>
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
            '30-day money-back guarantee',
          ]}
        />
      </div>
    </Section>

    <Background color="bg-muted">
      <Section title="Feature Comparison">
        <PricingTable />
      </Section>
    </Background>

    <Section title="Pricing FAQ">
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
    </Section>

    <Section>
      <div className="text-center">
        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
          Not sure which SEO package is right for you?
        </h2>
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

export { PricingPage };
