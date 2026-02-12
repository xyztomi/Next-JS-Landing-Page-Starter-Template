import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Section yPadding="py-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <button
          className="block shrink-0 p-2 sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {menuOpen ? (
            <X className="size-6 text-foreground" />
          ) : (
            <Menu className="size-6 text-foreground" />
          )}
        </button>

        <nav className="hidden sm:flex sm:items-center">
          <ul className="flex items-center gap-4 text-sm font-medium text-muted-foreground md:gap-6 md:text-base">
            <li className="transition-colors hover:text-foreground">
              <Link href="/#services">Services</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/about/">About</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/blog/">Blog</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/reviews/">Reviews</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
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

      {menuOpen && (
        <nav className="border-t border-border pt-3 sm:hidden">
          <ul className="flex flex-col gap-3 text-base font-medium text-foreground">
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/blog/">Blog</Link>
            </li>
            <li>
              <Link href="/reviews/">Reviews</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li className="pt-1">
              <Link href="/contact/#free-audit">
                <Button>Free SEO Audit</Button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </Section>
  );
};

export { Navbar };
