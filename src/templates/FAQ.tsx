import { FAQItem } from '../faq/FAQItem';
import { Section } from '../layout/Section';

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'Most small businesses start seeing measurable improvements in rankings and traffic within 3-6 months. SEO is a long-term strategy, and results compound over time. We provide monthly reports so you can track progress from day one.',
  },
  {
    question: 'What makes your SEO services affordable for small businesses?',
    answer:
      'We specialize exclusively in small business SEO, which allows us to streamline our processes and offer competitive pricing. Our packages start at $499/month with no long-term contracts required.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer:
      'No. We offer month-to-month plans because we believe in earning your business every month. While SEO works best as a long-term strategy, you are free to cancel anytime.',
  },
  {
    question: 'What is included in the free SEO audit?',
    answer:
      'Our free audit covers technical SEO issues, on-page optimization opportunities, keyword analysis, competitor benchmarking, and a prioritized action plan with specific recommendations for your website.',
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer:
      'We have experience with over 50 different industries, from restaurants and law firms to e-commerce stores and home service providers. Our SEO strategies are customized for your specific industry and local market.',
  },
  {
    question: 'How do you measure and report on SEO progress?',
    answer:
      'We provide detailed monthly reports covering keyword rankings, organic traffic, backlink growth, and conversion data. You will also have access to a live dashboard where you can track progress at any time.',
  },
];

const FAQ = () => (
  <Section
    title="Frequently Asked Questions"
    description="Common questions about our SEO services for small businesses."
  >
    <div className="mx-auto max-w-3xl">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  </Section>
);

export { FAQ };
