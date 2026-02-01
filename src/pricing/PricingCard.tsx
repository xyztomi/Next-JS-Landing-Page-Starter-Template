import Link from 'next/link';

import { Button } from '../button/Button';

type IPricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
};

const PricingCard = (props: IPricingCardProps) => (
  <div
    className={`relative flex flex-col rounded-lg border-2 p-8 ${
      props.highlighted
        ? 'border-accent-500 shadow-lg'
        : 'border-gray-200 shadow'
    }`}
  >
    {props.highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-sm font-semibold text-white">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-navy-700">{props.name}</h3>
    <div className="mt-4">
      <span className="text-4xl font-bold text-navy-700">{props.price}</span>
      <span className="text-gray-500">/mo</span>
    </div>
    <p className="mt-2 text-gray-600">{props.description}</p>
    <ul className="mt-6 grow space-y-3">
      {props.features.map((feature) => (
        <li key={feature} className="flex items-start">
          <svg
            className="mr-2 mt-1 size-5 shrink-0 text-accent-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-8">
      <Link href={props.ctaHref || '/contact/#free-audit'}>
        <Button xl variant={props.highlighted ? 'primary' : 'outline'}>
          {props.ctaText || 'Get Started'}
        </Button>
      </Link>
    </div>
  </div>
);

export { PricingCard };
