import Link from 'next/link';
import type { ReactNode } from 'react';

import { Card, CardContent } from '@/components/ui/card';

type IServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
};

const ServiceCard = (props: IServiceCardProps) => (
  <Link href={props.href} className="block">
    <Card className="transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 text-accent">{props.icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          {props.title}
        </h3>
        <p className="text-muted-foreground">{props.description}</p>
      </CardContent>
    </Card>
  </Link>
);

export { ServiceCard };
