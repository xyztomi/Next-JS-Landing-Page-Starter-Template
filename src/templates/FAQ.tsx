import { Accordion } from '@/components/ui/accordion';

import { FAQItem } from '../faq/FAQItem';
import { Section } from '../layout/Section';

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'Most small businesses start seeing measurable improvements in rankings and traffic within 3-6 months. SEO is a long-term strategy, and results compound over time. We provide weekly reports so you can track progress from day one.',
  },
  {
    question: 'What makes your SEO packages affordable for small businesses?',
    answer:
      'We specialize in small business SEO, which allows us to streamline our processes and offer competitive pricing. Our SEO packages for small business start at $697/month with no long-term contracts and a 30-day money-back guarantee.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer:
      'No. We offer month-to-month plans because we believe in earning your business every month. You can cancel anytime. We also offer a 30-day money-back guarantee on all plans.',
  },
  {
    question: 'What is included in the free SEO audit?',
    answer:
      'Our free audit covers technical SEO issues, on-page optimization opportunities, keyword analysis, competitor benchmarking, and a prioritized action plan with specific recommendations for your website.',
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer:
      'We have experience with over 50 different industries, from law firms and dental practices to e-commerce stores, HVAC contractors, and home service providers. Our SEO strategies are customized for your specific industry and local market.',
  },
  {
    question: 'How do you measure and report on SEO progress?',
    answer:
      'We provide detailed weekly performance reports covering keyword rankings, organic traffic, backlink growth, and conversion data. You also get a dedicated account manager and WhatsApp/Slack support with under 4-hour response time.',
  },
];

const FAQ = () => (
  <Section
    title="Frequently Asked Questions"
    description="Common questions about our affordable SEO services for small businesses."
  >
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            value={`faq-${index}`}
          />
        ))}
      </Accordion>
    </div>
  </Section>
);

export { FAQ };
