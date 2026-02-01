import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const steps = [
  {
    number: '1',
    title: 'Audit',
    description:
      'We start with a comprehensive SEO audit to identify opportunities, technical issues, and quick wins for your website.',
  },
  {
    number: '2',
    title: 'Optimize',
    description:
      'Our team implements on-page optimization, fixes technical issues, creates content, and builds quality backlinks.',
  },
  {
    number: '3',
    title: 'Grow',
    description:
      'Watch your rankings climb, organic traffic increase, and leads grow. We provide monthly reports to track progress.',
  },
];

const HowItWorks = () => (
  <Background color="bg-gray-100">
    <Section
      title="How It Works"
      description="Our proven 3-step process delivers results for small businesses."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-accent-500 text-2xl font-bold text-white">
              {step.number}
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-navy-700">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  </Background>
);

export { HowItWorks };
