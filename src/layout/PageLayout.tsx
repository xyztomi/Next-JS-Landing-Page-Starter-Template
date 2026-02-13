import type { ReactNode } from 'react';

import { Navbar } from '../templates/Navbar';
import { SiteFooter } from '../templates/SiteFooter';
import type { BlogPostMeta } from '../utils/blog';
import { Meta } from './Meta';

type IPageLayoutProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  children: ReactNode;
  jsonLd?: ReactNode;
  recentPosts?: BlogPostMeta[];
};

const PageLayout = (props: IPageLayoutProps) => (
  <div className="text-muted-foreground antialiased">
    <Meta
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      ogImage={props.ogImage}
      ogType={props.ogType}
      noindex={props.noindex}
    >
      {props.jsonLd}
    </Meta>
    <Navbar />
    {props.children}
    <SiteFooter recentPosts={props.recentPosts} />
  </div>
);

export { PageLayout };
