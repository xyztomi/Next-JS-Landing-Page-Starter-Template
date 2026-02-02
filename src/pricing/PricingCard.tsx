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
    <CardHeader>
      <h3 className="text-2xl font-bold text-foreground">{props.name}</h3>
      <div className="mt-4">
        <span className="text-4xl font-bold text-foreground">
          {props.price}
        </span>
        <span className="text-muted-foreground">/mo</span>
      </div>
      <p className="mt-2 text-muted-foreground">{props.description}</p>
    </CardHeader>
    <CardContent className="grow">
      <ul className="space-y-3">
        {props.features.map((feature) => (
          <li key={feature} className="flex items-start">
            <Check className="mr-2 mt-1 size-5 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Link href={props.ctaHref || '/contact/#free-audit'} className="w-full">
        <Button xl variant={props.highlighted ? 'primary' : 'outline'}>
          {props.ctaText || 'Get Started'}
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export { PricingCard };
