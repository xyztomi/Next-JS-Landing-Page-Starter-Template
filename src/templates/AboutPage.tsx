import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { TeamCard } from '../team/TeamCard';

const values = [
  {
    title: 'ROI-First Approach',
    description:
      'Every decision is structured around maximizing your return on investment, not vanity metrics.',
  },
  {
    title: 'Full Transparency',
    description:
      'Complete account access, live reporting dashboards, and candid communication about performance.',
  },
  {
    title: 'Small Business First',
    description:
      'Every SEO strategy is designed with small business budgets and goals in mind. No enterprise upselling.',
  },
  {
    title: 'No Long-Term Contracts',
    description:
      'Month-to-month plans with a 30-day money-back guarantee. We earn your business every month.',
  },
];

const AboutPage = () => (
  <>
    <Background color="bg-muted">
      <Section yPadding="pt-12 pb-10 sm:pt-16 md:pt-20 md:pb-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            About SEO Services for Small Biz
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
            We help small businesses compete online with affordable,
            results-driven SEO strategies.
          </p>
        </div>
      </Section>
    </Background>

    <Section>
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:mb-6 md:text-3xl">
          Our Story
        </h2>
        <div className="space-y-4 text-base text-muted-foreground sm:text-lg">
          <p>
            We started because we saw a gap in the market. Most SEO agencies
            cater to enterprise clients with enterprise budgets, leaving small
            businesses without access to quality SEO services they can afford.
          </p>
          <p>
            Since 2018, our team of certified SEO specialists has helped over
            150 small businesses improve their search rankings and grow their
            online presence. We prioritize profitability over vanity metrics and
            treat every client&apos;s budget like our own.
          </p>
          <p>
            From local plumbers and restaurants to law firms, dental practices,
            and e-commerce stores, we have experience across dozens of
            industries and know what it takes to succeed in competitive markets.
          </p>
        </div>
      </div>
    </Section>

    <Background color="bg-muted">
      <Section title="Our Mission">
        <p className="mx-auto max-w-3xl text-center text-base text-muted-foreground sm:text-lg">
          To make professional SEO accessible and affordable for every small
          business, so they can compete with larger companies in search results
          and grow their business online.
        </p>
      </Section>
    </Background>

    <Section title="Our Values">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        {values.map((value) => (
          <Card key={value.title}>
            <CardContent className="p-5 sm:p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>

    <Background color="bg-muted">
      <Section title="Our Team">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <TeamCard
            name="Alex Rivera"
            role="Founder & SEO Director"
            bio="10+ years of SEO experience. Previously led digital marketing at a Fortune 500 company before founding SEO Services for Small Biz."
          />
          <TeamCard
            name="Jordan Lee"
            role="Technical SEO Lead"
            bio="Expert in site architecture, Core Web Vitals, and technical optimization. Google Analytics 4 certified professional."
          />
          <TeamCard
            name="Sam Patel"
            role="Content Strategist"
            bio="Former journalist turned content marketer. Specializes in creating SEO content that engages readers and ranks."
          />
        </div>
      </Section>
    </Background>

    <Section>
      <div className="text-center">
        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
          Ready to Work With Us?
        </h2>
        <p className="mb-6 text-base text-muted-foreground sm:text-lg md:mb-8 md:text-xl">
          Let&apos;s discuss how our affordable SEO services can help your small
          business grow.
        </p>
        <Link href="/contact/">
          <Button xl>Get in Touch</Button>
        </Link>
      </div>
    </Section>
  </>
);

export { AboutPage };
