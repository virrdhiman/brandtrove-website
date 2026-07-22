export const SITE = {
  name: 'Brandtrove',
  legalName: 'Brandtrove',
  domain: 'brandtroveglobal.com',
  url: 'https://brandtroveglobal.com',
  tagline: 'Where Brands Become Cultural Icons',
  description:
    'Brandtrove designs and executes strategic collaborations between brands and athletes, celebrities, and influencers—building visibility, credibility, and cultural relevance across India and global markets.',
  keywords: [
    'brand partnerships India',
    'sports marketing agency',
    'celebrity endorsements',
    'influencer marketing',
    'brand collaborations',
    'athlete partnerships',
    'Brandtrove',
  ].join(', '),
  email: 'info@brandtroveglobal.com',
  privacyEmail: 'privacy@brandtroveglobal.com',
  phone: '+91 9817303991',
  phoneDisplay: '9817303991',
  phoneTel: '+919817303991',
  location: 'Delhi, India',
  country: 'IN',
  locale: 'en_IN',
  logo: '/logo.png',
  ogImage: '/images/hero-partnerships.jpg',
  poweredBy: {
    name: 'Productive IT',
    url: 'https://productiveit.in/',
    shortLabel: 'POWERED BY',
    highlight: 'PRODUCTIVE',
    suffix: 'iT',
  },
  /** Paste profile URLs when live — empty strings hide links and omit from schema */
  social: {
    linkedin: 'https://www.linkedin.com/company/brandtroveglobal/',
    instagram: 'https://www.instagram.com/brandtroveglobal/',
    x: 'https://x.com/brandtrove',
    facebook: 'https://www.facebook.com/brandtroveglobal/',
  },
  legalUpdated: '2026-06-29',
} as const;

export const SOCIAL_PROFILES = [
  { key: 'linkedin', label: 'LinkedIn', url: SITE.social.linkedin },
  { key: 'instagram', label: 'Instagram', url: SITE.social.instagram },
  { key: 'x', label: 'X', url: SITE.social.x },
  { key: 'facebook', label: 'Facebook', url: SITE.social.facebook },
] as const;

export function activeSocialUrls(): string[] {
  return SOCIAL_PROFILES.map((profile) => profile.url).filter(Boolean);
}

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/sports-collaborations', label: 'Sports' },
  { href: '/influencer-creator', label: 'Influencers' },
  { href: '/brand-partnerships', label: 'Partnerships' },
  { href: '/events-experiences', label: 'Events' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_NAV = {
  services: [
    { href: '/sports-collaborations', label: 'Sports Collaborations' },
    { href: '/influencer-creator', label: 'Influencer & Creator' },
    { href: '/brand-partnerships', label: 'Brand Partnerships' },
    { href: '/events-experiences', label: 'Events & Experiences' },
    { href: '/services', label: 'All Services' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/industries', label: 'Industries' },
    { href: '/global-reach', label: 'Global Reach' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog & Insights' },
    { href: '/faq', label: 'FAQ' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  network: [
    { href: 'https://virender.in/', label: 'Virender Dhiman' },
    { href: 'https://productiveit.in/', label: 'Productive IT' },
    { href: 'https://primespaceworks.com/', label: 'PrimeSpaceWorks' },
    { href: 'https://brandtroveglobal.com/', label: 'Brandtrove' },
  ],
} as const;
