import Head from 'next/head';
import { useRouter } from 'next/router';
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
  const router = useRouter();
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
        href={`${router.basePath}/favicon.svg`}
        key="favicon-svg"
      />
      <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
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
