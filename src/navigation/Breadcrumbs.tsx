import Link from 'next/link';

import { Section } from '../layout/Section';

type IBreadcrumbItem = {
  label: string;
  href?: string;
};

type IBreadcrumbsProps = {
  items: IBreadcrumbItem[];
};

const Breadcrumbs = (props: IBreadcrumbsProps) => (
  <Section yPadding="py-4">
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-accent-500">
            Home
          </Link>
        </li>
        {props.items.map((item) => (
          <li key={item.label} className="flex items-center gap-1">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-accent-500">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </Section>
);

export { Breadcrumbs };
