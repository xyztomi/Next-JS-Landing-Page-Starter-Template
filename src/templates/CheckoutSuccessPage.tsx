import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const CheckoutSuccessPage = () => (
  <Section yPadding="py-20 md:py-32">
    <div className="mx-auto max-w-lg text-center">
      <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="size-10 text-green-600" />
      </div>

      <h1 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
        Payment Successful!
      </h1>

      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        Thank you for choosing our SEO services. We&apos;ll be in touch within
        24 hours to kick off your campaign.
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        Check your email for a payment confirmation from Stripe.
      </p>

      <div className="mt-8">
        <Link href="/">
          <Button xl>Back to Home</Button>
        </Link>
      </div>
    </div>
  </Section>
);

export { CheckoutSuccessPage };
