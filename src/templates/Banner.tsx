import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to Get More Customers with SEO?"
      subtitle="Start with a free SEO audit and see exactly what's holding your small business back."
      button={
        <Link href="/contact/#free-audit">
          <Button>Get Your Free Audit</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
