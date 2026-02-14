import { Mail, Phone } from 'lucide-react';
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
    {/* Main footer columns */}
    <Section yPadding="pt-12 pb-0 md:pt-16">
      <div className="grid grid-cols-1 gap-10 text-gray-300 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-5 [&_span]:text-white [&_svg]:text-accent">
            <Logo />
          </div>
          <p className="mb-6 text-sm leading-relaxed">
            Affordable SEO services that help small businesses rank higher, get
            more traffic, and grow online.
          </p>
          <div className="space-y-2 text-sm">
            <a
              href="mailto:support@bestppcfirm.com"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-4 shrink-0 text-accent" />
              support@bestppcfirm.com
            </a>
            <a
              href="tel:+17143988563"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="size-4 shrink-0 text-accent" />
              +1 (714) 398-8563
            </a>
          </div>
        </div>

        {/* SEO Services */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
            SEO Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/#local-seo"
                className="transition-colors hover:text-white"
              >
                Local SEO
              </Link>
            </li>
            <li>
              <Link
                href="/#on-page-seo"
                className="transition-colors hover:text-white"
              >
                On-Page SEO
              </Link>
            </li>
            <li>
              <Link
                href="/#technical-seo"
                className="transition-colors hover:text-white"
              >
                Technical SEO
              </Link>
            </li>
            <li>
              <Link
                href="/#content-marketing"
                className="transition-colors hover:text-white"
              >
                Content Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/#link-building"
                className="transition-colors hover:text-white"
              >
                Link Building
              </Link>
            </li>
            <li>
              <Link
                href="/#seo-audits"
                className="transition-colors hover:text-white"
              >
                SEO Audits
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/about/"
                className="transition-colors hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/#pricing"
                className="transition-colors hover:text-white"
              >
                SEO Packages
              </Link>
            </li>
            <li>
              <Link
                href="/blog/"
                className="transition-colors hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/reviews/"
                className="transition-colors hover:text-white"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/contact/"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://bestppcfirm.com/case-studies"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Case Studies
              </a>
            </li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
            Get Started
          </h3>
          <p className="mb-5 text-sm leading-relaxed">
            Ready to improve your search rankings? Get a free audit and
            we&apos;ll show you exactly what to fix.
          </p>
          <Link
            href="/contact/#free-audit"
            className="inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-600"
          >
            Free SEO Audit &rarr;
          </Link>
        </div>
      </div>
    </Section>

    {/* Recent Blog Posts */}
    {props.recentPosts && props.recentPosts.length > 0 && (
      <Section yPadding="pt-8 pb-0">
        <div className="border-t border-navy-600 pt-8">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-gray-400">
            Recent Blog Posts
          </h3>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {props.recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    )}

    {/* SEO Network */}
    <Section yPadding="pt-8 pb-0">
      <div className="border-t border-navy-600 pt-8">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
          Our SEO Network
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {[
            {
              label: 'Get Affordable SEO',
              href: 'https://getaffordableseo.com/',
            },
            {
              label: 'Affordable SEO Guy',
              href: 'https://affordableseoguy.com/',
            },
            {
              label: 'Affordable SEO Services',
              href: 'https://affordableseoservices1.com/',
            },
            {
              label: 'Most Affordable SEO',
              href: 'https://mostaffordableseo.com/',
            },
          ].map((site) => (
            <a
              key={site.label}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-navy-500 px-3.5 py-1.5 text-xs text-gray-400 transition-colors hover:border-gray-400 hover:text-white"
            >
              {site.label}
            </a>
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Multiple sites. One core service. Built to help small businesses find
          the right plan faster.
        </p>
      </div>
    </Section>

    {/* Copyright */}
    <Section yPadding="py-8">
      <div className="border-t border-navy-600 pt-8 text-center text-xs text-gray-500">
        <FooterCopyright />
      </div>
    </Section>
  </Background>
);

export { SiteFooter };
