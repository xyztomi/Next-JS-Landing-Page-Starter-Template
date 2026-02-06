import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-muted">
    <Section yPadding="pt-10 pb-10 sm:pt-16 sm:pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent sm:mb-4 sm:text-base">
          Trusted by 150+ Small Businesses
        </p>

        <h1 className="text-3xl font-bold leading-snug text-foreground sm:text-4xl sm:leading-tight md:text-5xl md:leading-hero">
          SEO Services for Small Business
          <br />
          <span className="text-accent">
            More Traffic. More Leads. More Revenue.
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
          Looking for SEO services for small business that actually deliver
          results? We help small businesses rank higher on Google, drive
          qualified organic traffic, and turn visitors into paying customers
          &mdash; all with affordable SEO services starting at $697/month.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <Link href="/contact/#free-audit">
            <Button xl>
              Get a Free SEO Audit <ArrowRight className="ml-2 inline size-5" />
            </Button>
          </Link>
          <Link href="#pricing">
            <Button xl variant="outline">
              View SEO Packages
            </Button>
          </Link>
        </div>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground sm:mt-8 sm:gap-x-8 sm:text-base">
          <li className="flex items-center gap-1.5">
            <CheckCircle className="size-4 text-accent" />
            No long-term contracts
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="size-4 text-accent" />
            30-day money-back guarantee
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="size-4 text-accent" />
            96% client retention
          </li>
        </ul>
      </div>
    </Section>

    <Section yPadding="pb-10 sm:pb-16 md:pb-20">
      <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        Our SEO packages for small business combine technical optimization,
        content marketing, and link building into plans designed for small
        business budgets. No hidden fees. Just proven strategies with an average
        3.5X return on investment. Whether you need local SEO to dominate your
        city, on-page optimization to rank for your best keywords, or a complete
        SEO package for small business growth, our team delivers measurable
        results with weekly progress reports.
      </p>
    </Section>
  </Background>
);

export { Hero };
