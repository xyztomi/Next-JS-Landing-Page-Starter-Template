import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to Grow Your Small Business with SEO?"
      subtitle="Get a free audit and see how we can help."
      button={
        <Link href="/contact/#free-audit">
          <Button>Get Your Free Audit</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
