import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { FAQItem } from '../faq/FAQItem';
import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingTable } from '../pricing/PricingTable';

const pricingFaqs = [
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
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
    question: 'Do you offer custom plans?',
    answer:
      "Yes. If our standard packages don't fit your needs, contact us for a custom plan tailored to your business goals and budget.",
  },
];

const PricingPage = () => (
  <>
    <Background color="bg-gray-100">
      <Section yPadding="pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-navy-700">
            Affordable SEO Pricing for Small Business
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Transparent pricing with no long-term contracts. Choose the plan
            that fits your budget and watch your business grow.
          </p>
        </div>
      </Section>
    </Background>

    <Section>
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
            'Dedicated account manager',
          ]}
        />
      </div>
    </Section>

    <Background color="bg-gray-100">
      <Section title="Feature Comparison">
        <PricingTable />
      </Section>
    </Background>

    <Section title="Pricing FAQ">
      <div className="mx-auto max-w-3xl">
        {pricingFaqs.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </Section>

    <Section>
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-navy-700">
          Not sure which plan is right for you?
        </h2>
        <p className="mb-8 text-xl text-gray-600">
          Get a free SEO audit and we&apos;ll recommend the best plan for your
          business.
        </p>
        <Link href="/contact/#free-audit">
          <Button xl>Get Your Free Audit</Button>
        </Link>
      </div>
    </Section>
  </>
);

export { PricingPage };
