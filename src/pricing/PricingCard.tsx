import { Check } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

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
  <Card
    className={`relative flex flex-col ${
      props.highlighted ? 'border-2 border-accent shadow-lg' : 'shadow'
    }`}
  >
    {props.highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <Badge>Most Popular</Badge>
      </div>
    )}
    <CardHeader className="p-4 sm:p-6">
      <h3 className="text-lg font-bold text-foreground sm:text-xl md:text-2xl">
        {props.name}
      </h3>
      <div className="mt-3 sm:mt-4">
        <span className="text-3xl font-bold text-foreground sm:text-4xl">
          {props.price}
        </span>
        <span className="text-muted-foreground">/mo</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        {props.description}
      </p>
    </CardHeader>
    <CardContent className="grow p-4 pt-0 sm:p-6 sm:pt-0">
      <ul className="space-y-2 text-sm sm:space-y-3 sm:text-base">
        {props.features.map((feature) => (
          <li key={feature} className="flex items-start">
            <Check className="mr-2 mt-0.5 size-4 shrink-0 text-accent sm:mt-1 sm:size-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="p-4 sm:p-6">
      <Link href={props.ctaHref || '/contact/#free-audit'} className="w-full">
        <Button xl variant={props.highlighted ? 'primary' : 'outline'}>
          {props.ctaText || 'Get Started'}
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export { PricingCard };
