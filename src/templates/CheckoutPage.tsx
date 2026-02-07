'use client';

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ArrowLeft, Check, Loader2, Lock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { type PlanKey, plans } from '../utils/plans';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
);

/* ------------------------------------------------------------------ */
/*  Payment form rendered inside <Elements>                           */
/* ------------------------------------------------------------------ */
const PaymentForm = ({ price }: { price: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!stripe || !elements) return;

      setLoading(true);
      setError(null);

      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success/`,
        },
      });

      // Only reaches here if there's an error (otherwise redirects)
      if (confirmError) {
        setError(
          confirmError.message || 'Something went wrong. Please try again.',
        );
      }
      setLoading(false);
    },
    [stripe, elements],
  );

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Lock className="size-4" />
        )}
        {loading ? 'Processing…' : `Pay ${price}`}
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-4" />
        Secure payment powered by Stripe
      </div>
    </form>
  );
};

/* ------------------------------------------------------------------ */
/*  Order summary + payment section (plan selected)                   */
/* ------------------------------------------------------------------ */
const CheckoutWithPlan = ({
  planKey,
  plan,
}: {
  planKey: PlanKey;
  plan: (typeof plans)[PlanKey];
}) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planKey }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to create payment');
        setClientSecret(data.clientSecret);
      })
      .catch((err) => setFetchError(err.message));
  }, [planKey]);

  return (
    <>
      <Background color="bg-muted">
        <Section yPadding="pt-12 pb-10 sm:pt-16 md:pt-20 md:pb-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Complete Your Order
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
              Review your selection and enter payment details below.
            </p>
          </div>
        </Section>
      </Background>

      <Section>
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#pricing"
            className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to plans
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Order summary */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader className="border-b p-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-accent">
                    Your selected plan
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-foreground">
                    {plan.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="p-6">
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <Check className="mr-2 mt-0.5 size-4 shrink-0 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-foreground">
                        Total
                      </span>
                      <span className="text-3xl font-bold text-foreground">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment form */}
            <div className="lg:col-span-3">
              <Card className="shadow-lg">
                <CardHeader className="border-b p-6">
                  <h2 className="text-xl font-bold text-foreground">
                    Payment Details
                  </h2>
                </CardHeader>

                <CardContent className="p-6">
                  {fetchError && (
                    <p className="text-sm text-red-600">{fetchError}</p>
                  )}

                  {!clientSecret && !fetchError && (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="size-6 animate-spin text-muted-foreground" />
                    </div>
                  )}

                  {clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                      <PaymentForm price={plan.price} />
                    </Elements>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Plan picker (no plan in query string)                             */
/* ------------------------------------------------------------------ */
const PlanPicker = () => (
  <>
    <Background color="bg-muted">
      <Section yPadding="pt-12 pb-10 sm:pt-16 md:pt-20 md:pb-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Choose Your SEO Package
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
            Select a plan to proceed to secure checkout.
          </p>
        </div>
      </Section>
    </Background>

    <Section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {(Object.keys(plans) as PlanKey[]).map((key) => {
          const plan = plans[key];
          return (
            <Card
              key={key}
              className={`flex flex-col ${key === 'pro' ? 'border-2 border-accent shadow-lg' : 'shadow'}`}
            >
              <CardHeader className="p-6">
                <h2 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h2>
                <div className="mt-3">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="grow p-6 pt-0">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start">
                      <Check className="mr-2 mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={`/checkout/?plan=${key}`} className="w-full">
                  <Button xl variant={key === 'pro' ? 'primary' : 'outline'}>
                    Select Plan
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  </>
);

/* ------------------------------------------------------------------ */
/*  Main checkout page                                                */
/* ------------------------------------------------------------------ */
const CheckoutPage = () => {
  const router = useRouter();
  const planParam = router.query.plan as string | undefined;

  const planKey =
    planParam && planParam in plans ? (planParam as PlanKey) : undefined;

  if (!planKey) {
    return <PlanPicker />;
  }

  return <CheckoutWithPlan planKey={planKey} plan={plans[planKey]} />;
};

export { CheckoutPage };
