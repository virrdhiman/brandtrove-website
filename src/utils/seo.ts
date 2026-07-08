import { SITE, activeSocialUrls } from '../data/site';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).href,
    })),
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
    logo: `${SITE.url}${SITE.logo}`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: ['IN', 'World'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.location,
      addressCountry: SITE.country,
    },
    priceRange: '$$$$',
    sameAs: activeSocialUrls(),
  };
}

export function founderSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Virender',
    jobTitle: 'Founder',
    worksFor: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    image: `${SITE.url}/images/founder-virender.png`,
    description:
      'Founder of Brandtrove. Technology and business transformation professional focused on strategic brand partnerships across sports, entertainment, and influencer ecosystems.',
  };
}
