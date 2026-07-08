export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  category: string;
  clientType: string;
  metrics: { value: string; label: string }[];
  image?: string;
  date: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'fmcg-cricket-season-campaign',
    title: 'FMCG Cricket Season — Regional Recall at Scale',
    description:
      'Structured athlete and league partnerships across key cricket markets with integrated digital amplification and retail activation tie-ins.',
    category: 'Sports Collaborations',
    clientType: 'FMCG · Pan-India',
    metrics: [
      { value: 'Multi-state', label: 'Regional coverage' },
      { value: 'Integrated', label: 'Digital + on-ground' },
      { value: 'Long-term', label: 'Partnership model' },
    ],
    image: '/images/sports.jpg',
    date: '2025-11-01',
  },
  {
    slug: 'regional-influencer-d2c-scale',
    title: 'Regional Creator Program for a D2C Brand',
    description:
      'Built a vernacular creator network across Tier-2 and Tier-3 cities with category-fit screening, content guidelines, and performance tracking.',
    category: 'Influencer & Creator',
    clientType: 'D2C · Consumer',
    metrics: [
      { value: 'Tier 2/3', label: 'Market focus' },
      { value: 'Higher ROI', label: 'vs metro-only' },
      { value: 'Structured', label: 'Creator governance' },
    ],
    image: '/images/influencer.jpg',
    date: '2025-09-15',
  },
  {
    slug: 'celebrity-fit-endorsement-restructure',
    title: 'Celebrity Endorsement Restructure — Fit Over Fame',
    description:
      'Replaced a misaligned celebrity partnership with a credibility-first endorsement model aligned to brand values and audience relevance.',
    category: 'Brand Partnerships',
    clientType: 'Lifestyle · Premium',
    metrics: [
      { value: 'Better fit', label: 'Brand alignment' },
      { value: 'Safer terms', label: 'Usage & rights' },
      { value: 'Stronger', label: 'Content performance' },
    ],
    image: '/images/entertainment.jpg',
    date: '2025-08-01',
  },
  {
    slug: 'hybrid-tech-product-launch',
    title: 'Hybrid Launch Event — Tech Brand Activation',
    description:
      'Coordinated a flagship product launch combining experiential on-ground design with creator-led digital coverage and post-event content reuse.',
    category: 'Events & Experiences',
    clientType: 'Technology · B2C',
    metrics: [
      { value: 'Single timeline', label: 'On + offline' },
      { value: 'Weeks of', label: 'Reusable content' },
      { value: 'National', label: 'Media reach' },
    ],
    image: '/images/events.jpg',
    date: '2025-06-01',
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
