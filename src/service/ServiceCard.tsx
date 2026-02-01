import Link from 'next/link';
import type { ReactNode } from 'react';

type IServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
};

const ServiceCard = (props: IServiceCardProps) => (
  <Link href={props.href} className="block">
    <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
      <div className="mb-4 text-accent-500">{props.icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-navy-700">
        {props.title}
      </h3>
      <p className="text-gray-600">{props.description}</p>
    </div>
  </Link>
);

export { ServiceCard };
