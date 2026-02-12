import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import type { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  children?: ReactNode;
};

const Meta = (props: IMetaProps) => {
  const ogImage =
    props.ogImage || `${AppConfig.url}/assets/images/og-default.png`;

  return (
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2290%22>📈</text></svg>"
        key="favicon-svg"
      />
      {props.noindex && <meta name="robots" content="noindex,nofollow" />}
      {generateNextSeo({
        title: props.title,
        description: props.description,
        canonical: props.canonical,
        openGraph: {
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          type: props.ogType || 'website',
          images: [{ url: ogImage, width: 1200, height: 630 }],
        },
      })}
      {props.children}
    </Head>
  );
};

export { Meta };
