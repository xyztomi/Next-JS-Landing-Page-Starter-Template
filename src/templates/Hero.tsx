import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-muted">
    <Section yPadding="pt-10 pb-10 sm:pt-16 sm:pb-20 md:pt-20 md:pb-32">
      <HeroOneButton
        title={
          <>
            {'Affordable SEO Services for Small Business |\n'}
            <span className="text-accent">Real Results, Fair Pricing</span>
          </>
        }
        description="Affordable SEO services for small businesses that drive real traffic, leads, and sales. Transparent pricing, proven strategies, and ROI-focused growth. Get started today."
        button={
          <Link href="/contact/#free-audit">
            <Button xl>Get a Free SEO Audit</Button>
          </Link>
        }
        secondButton={
          <Link href="/pricing/">
            <Button xl variant="outline">
              View SEO Packages
            </Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
