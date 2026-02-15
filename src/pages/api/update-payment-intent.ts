import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentIntentId, company, phone } = req.body as {
    paymentIntentId?: string;
    company?: string;
    phone?: string;
  };

  if (!paymentIntentId || !paymentIntentId.startsWith('pi_')) {
    return res.status(400).json({ error: 'Invalid payment intent ID' });
  }

  try {
    await stripe.paymentIntents.update(paymentIntentId, {
      metadata: {
        ...(company ? { company } : {}),
        ...(phone ? { phone } : {}),
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    const message =
      err instanceof Stripe.errors.StripeError
        ? err.message
        : 'Failed to update payment';
    return res.status(500).json({ error: message });
  }
}
