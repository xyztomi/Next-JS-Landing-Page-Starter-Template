import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

import { type PlanKey, plans } from '@/utils/plans';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { planKey } = req.body as { planKey?: string };

  if (!planKey || !(planKey in plans)) {
    return res.status(400).json({ error: 'Invalid plan' });
  }

  const plan = plans[planKey as PlanKey];

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: plan.amountInCents,
      currency: 'usd',
      metadata: { planKey, planName: plan.name },
    });

    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    const message =
      err instanceof Stripe.errors.StripeError ? err.message : 'Payment failed';
    return res.status(500).json({ error: message });
  }
}
