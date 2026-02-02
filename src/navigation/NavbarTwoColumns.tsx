import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="flex items-center gap-5 text-xl font-medium text-foreground">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
