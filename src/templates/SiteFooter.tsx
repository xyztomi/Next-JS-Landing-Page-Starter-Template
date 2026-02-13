import Link from 'next/link';

import { Background } from '../background/Background';
import { FooterCopyright } from '../footer/FooterCopyright';
import { Section } from '../layout/Section';
import type { BlogPostMeta } from '../utils/blog';
import { Logo } from './Logo';

type ISiteFooterProps = {
  recentPosts?: BlogPostMeta[];
};

const SiteFooter = (props: ISiteFooterProps) => (
  <Background color="bg-navy-700">
    <Section yPadding="py-10 md:py-12">
      <div className="grid grid-cols-1 gap-8 text-gray-300 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 [&_span]:text-white [&_svg]:text-accent">
            <Logo />
          </div>
          <p className="text-sm leading-relaxed">
            Affordable SEO services that help small businesses rank higher, get
            more traffic, and grow online.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">SEO Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#local-seo" className="hover:text-white">
                Local SEO
              </Link>
            </li>
            <li>
              <Link href="/#on-page-seo" className="hover:text-white">
                On-Page SEO
              </Link>
            </li>
            <li>
              <Link href="/#technical-seo" className="hover:text-white">
                Technical SEO
              </Link>
            </li>
            <li>
              <Link href="/#content-marketing" className="hover:text-white">
                Content Marketing
              </Link>
            </li>
            <li>
              <Link href="/#link-building" className="hover:text-white">
                Link Building
              </Link>
            </li>
            <li>
              <Link href="/#seo-audits" className="hover:text-white">
                SEO Audits
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about/" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-white">
                SEO Packages
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://bestppcfirm.com/case-studies"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Case Studies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Get Started</h3>
          <p className="mb-4 text-sm">Ready to improve your search rankings?</p>
          <Link
            href="/contact/#free-audit"
            className="inline-block rounded-md bg-accent px-4 py-2 font-semibold text-accent-foreground hover:bg-accent-600"
          >
            Free SEO Audit
          </Link>
          <div className="mt-4 space-y-1 text-sm">
            <p>support@bestppcfirm.com</p>
            <p>+1 (714) 398-8563</p>
          </div>
        </div>
      </div>

      {props.recentPosts && props.recentPosts.length > 0 && (
        <div className="mt-8 border-t border-navy-600 pt-8">
          <h3 className="mb-4 font-semibold text-white">Recent Blog Posts</h3>
          <ul className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-5">
            {props.recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-gray-300 hover:text-white"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 border-t border-navy-600 pt-8">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
          Our SEO Network
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'SEO Services for Small Business', href: '#' },
            { label: 'Get Affordable SEO', href: '#' },
            { label: 'Affordable SEO Guy', href: '#' },
            { label: 'Affordable SEO Services', href: '#' },
            { label: 'Affordable SEO Packages', href: '#' },
          ].map((site) => (
            <a
              key={site.label}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-navy-500 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
            >
              {site.label}
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Multiple sites. One core service. Built to help small businesses find
          the right plan faster.
        </p>
      </div>

      <div className="mt-8 border-t border-navy-600 pt-8 text-center text-sm text-gray-400">
        <FooterCopyright />
      </div>
    </Section>
  </Background>
);

export { SiteFooter };
