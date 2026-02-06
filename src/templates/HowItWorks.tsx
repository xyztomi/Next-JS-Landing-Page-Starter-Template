import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const steps = [
  {
    number: '1',
    title: 'Audit',
    description:
      'We start with a comprehensive SEO audit that evaluates your technical foundation, keyword opportunities, competitor landscape, and quick wins. Every new client receives this as part of our SEO packages for small business.',
  },
  {
    number: '2',
    title: 'Optimize',
    description:
      'Our team implements on-page SEO, resolves technical issues, creates keyword-targeted content, and builds quality backlinks — all the affordable SEO services your small business needs to climb the rankings.',
  },
  {
    number: '3',
    title: 'Grow',
    description:
      'Watch your rankings climb with weekly progress reports. Our small business SEO clients see measurable improvements within 3-6 months, with results compounding over time.',
  },
];

const HowItWorks = () => (
  <Background color="bg-muted">
    <Section
      id="how-it-works"
      title="How Our Small Business SEO Process Works"
      description="Our proven 3-step methodology has delivered results for 150+ small businesses across 50+ industries."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
              {step.number}
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  </Background>
);

export { HowItWorks };
