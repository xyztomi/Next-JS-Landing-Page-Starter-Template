import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Section yPadding="py-4">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <Link href="/">
            <Logo xl />
          </Link>
        </div>

        <button
          className="block sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {menuOpen ? (
            <X className="size-8 text-foreground" />
          ) : (
            <Menu className="size-8 text-foreground" />
          )}
        </button>

        <nav
          className={`${menuOpen ? 'block' : 'hidden'} w-full sm:flex sm:w-auto sm:items-center`}
        >
          <ul className="flex flex-col items-center gap-4 pt-4 text-xl font-medium text-foreground sm:flex-row sm:gap-6 sm:pt-0">
            <li>
              <Link href="/services/">Services</Link>
            </li>
            <li>
              <Link href="/pricing/">Pricing</Link>
            </li>
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/blog/">Blog</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li>
              <Link href="/contact/#free-audit">
                <Button>Free SEO Audit</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Section>
  );
};

export { Navbar };
