import { AppConfig } from '../utils/AppConfig';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: AppConfig.site_name,
    url: AppConfig.url,
    description: AppConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-714-398-8563',
      contactType: 'customer service',
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: AppConfig.site_name,
    url: AppConfig.url,
    description: AppConfig.description,
    telephone: '+1-714-398-8563',
    email: 'support@bestppcfirm.com',
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: AppConfig.site_name,
      url: AppConfig.url,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  authorName: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: AppConfig.site_name,
      url: AppConfig.url,
    },
  };
}

export function reviewSchema(
  reviews: {
    name: string;
    body: string;
    ratingValue: number;
  }[],
) {
  const ratings = reviews.map((r) => r.ratingValue);
  const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: AppConfig.site_name,
    url: AppConfig.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      reviewCount: reviews.length.toString(),
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.name,
      },
      reviewBody: r.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.ratingValue.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: AppConfig.url,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem' as const,
        position: index + 2,
        name: item.name,
        ...(item.url ? { item: item.url } : {}),
      })),
    ],
  };
}
