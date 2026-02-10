export const plans = {
  essentials: {
    name: 'SEO Essentials',
    price: '$697',
    amountInCents: 69700,
    priceId: 'price_1SxVjqFKez6q7wlYEaq8GZLf',
    description: 'Perfect for small businesses starting their SEO journey.',
    features: [
      'Complete technical SEO audit',
      'On-page optimization',
      '5 keyword targets',
      'Google Business Profile setup',
      'Monthly ranking reports',
    ],
  },
  pro: {
    name: 'SEO Pro',
    price: '$997',
    amountInCents: 99700,
    priceId: 'price_1SxVktFKez6q7wlYk1KgYnry',
    description: 'Full-service SEO for small businesses ready to grow.',
    features: [
      'Everything in Essentials',
      'Content strategy & creation',
      'Backlink building & outreach',
      'Ongoing improvements & updates',
      'Weekly performance reports',
      'Dedicated account manager',
    ],
  },
  growth: {
    name: 'SEO Growth',
    price: '$1,497',
    amountInCents: 149700,
    priceId: 'price_1SxVlkFKez6q7wlYpzyuxtmC',
    description:
      'Aggressive SEO for businesses serious about dominating search.',
    features: [
      'Everything in Pro',
      '15+ keyword targets',
      'Advanced content creation',
      'Competitor analysis',
      'Priority support',
      'WhatsApp/Slack support',
    ],
  },
  test: {
    name: 'Test Plan',
    price: '$1',
    amountInCents: 100,
    priceId: 'price_1SzKkNFKez6q7wlYBJC7No9F',
    description: 'Test plan for verifying the checkout flow.',
    features: ['Test purchase'],
  },
} as const;

export type PlanKey = keyof typeof plans;
