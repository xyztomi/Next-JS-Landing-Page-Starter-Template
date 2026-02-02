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
            {'Affordable SEO Services\n'}
            <span className="text-accent">for Small Businesses</span>
          </>
        }
        description="Drive more organic traffic, rank higher on Google, and grow your small business with proven SEO strategies that fit your budget."
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
