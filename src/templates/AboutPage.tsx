import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { TeamCard } from '../team/TeamCard';

const values = [
  {
    title: 'Transparency',
    description:
      'No hidden fees, no jargon. We explain everything in plain language and report results honestly.',
  },
  {
    title: 'Results-Driven',
    description:
      'We focus on metrics that matter to your business: traffic, leads, and revenue growth.',
  },
  {
    title: 'Small Business First',
    description:
      'Every strategy is designed with small business budgets and goals in mind. No enterprise upselling.',
  },
  {
    title: 'Long-Term Partnerships',
    description:
      'We build lasting relationships with our clients and invest in their success over time.',
  },
];

const AboutPage = () => (
  <>
    <Background color="bg-gray-100">
      <Section yPadding="pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-navy-700">
            About SEO Services for Small Biz
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            We help small businesses compete online with affordable,
            results-driven SEO strategies.
          </p>
        </div>
      </Section>
    </Background>

    <Section>
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold text-navy-700">Our Story</h2>
        <div className="space-y-4 text-lg text-gray-600">
          <p>
            We started SEO Services for Small Biz because we saw a gap in the
            market. Most SEO agencies cater to enterprise clients with
            enterprise budgets, leaving small businesses without access to
            quality SEO services they can afford.
          </p>
          <p>
            Our team of SEO specialists has helped over 200 small businesses
            improve their search rankings and grow their online presence. We
            understand the unique challenges small businesses face and have
            built our services specifically to address them.
          </p>
          <p>
            From local plumbers and restaurants to online boutiques and
            professional service firms, we have experience across dozens of
            industries and know what it takes to succeed in competitive markets.
          </p>
        </div>
      </div>
    </Section>

    <Background color="bg-gray-100">
      <Section title="Our Mission">
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
          To make professional SEO accessible and affordable for every small
          business, so they can compete with larger companies in search results
          and grow their business online.
        </p>
      </Section>
    </Background>

    <Section title="Our Values">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-lg border border-gray-200 p-6"
          >
            <h3 className="mb-2 text-xl font-semibold text-navy-700">
              {value.title}
            </h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </Section>

    <Background color="bg-gray-100">
      <Section title="Our Team">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TeamCard
            name="Alex Rivera"
            role="Founder & SEO Director"
            bio="10+ years of SEO experience. Previously led SEO at a Fortune 500 company before founding SEO Services for Small Biz."
          />
          <TeamCard
            name="Jordan Lee"
            role="Technical SEO Lead"
            bio="Expert in site architecture, Core Web Vitals, and technical optimization. Certified Google Analytics professional."
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
        <h2 className="mb-4 text-3xl font-bold text-navy-700">
          Ready to Work With Us?
        </h2>
        <p className="mb-8 text-xl text-gray-600">
          Let&apos;s discuss how we can help your small business grow with SEO.
        </p>
        <Link href="/contact/">
          <Button xl>Get in Touch</Button>
        </Link>
      </div>
    </Section>
  </>
);

export { AboutPage };
