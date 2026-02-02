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
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
        </li>
        {props.items.map((item) => (
          <li key={item.label} className="flex items-center gap-1">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </Section>
);

export { Breadcrumbs };
