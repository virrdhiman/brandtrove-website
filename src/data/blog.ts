export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cricket-partnerships-brand-growth-india',
    title: 'Cricket Partnerships as a Brand Growth Strategy in India',
    description: "Cricket remains India's most powerful brand stage. Here's how partnerships unlock regional reach, digital amplification, and sponsorship-led visibility.",
    category: 'Sports Partnerships',
    author: 'Virender',
    date: '2025-05-16',
    readTime: '4 min read',
    image: '/images/sports.jpg',
  },
  {
    slug: 'emerging-athletes-long-term-brand-building',
    title: 'Emerging Athletes and Long-Term Brand Building',
    description: "Emerging athletes offer credibility in motion. Here's how brands build long-term equity by backing ambition early.",
    category: 'Sports Partnerships',
    author: 'Virender',
    date: '2025-05-14',
    readTime: '4 min read',
    image: '/images/sports.jpg',
  },
  {
    slug: 'sports-activations-brand-recall',
    title: 'How Sports Activations Improve Brand Recall',
    description: 'Sports activations turn passive audiences into participants—creating stronger recall than visibility alone.',
    category: 'Events & Experiences',
    author: 'Virender',
    date: '2025-05-12',
    readTime: '4 min read',
    image: '/images/events.jpg',
  },
  {
    slug: 'brand-athlete-fit-over-popularity',
    title: 'Why Brand-Athlete Fit Matters More Than Popularity',
    description: 'Strong brand–athlete fit improves credibility, content performance, and commercial outcomes while reducing risk.',
    category: 'Sports Partnerships',
    author: 'Virender',
    date: '2025-05-10',
    readTime: '3 min read',
    image: '/images/sports.jpg',
  },
  {
    slug: 'sports-partnerships-build-trust',
    title: 'How Sports Partnerships Help Brands Build Trust',
    description: 'Sports partnerships can turn borrowed credibility into earned trust when built for consistency, not hype.',
    category: 'Sports Partnerships',
    author: 'Virender',
    date: '2025-05-08',
    readTime: '4 min read',
    image: '/images/sports.jpg',
  },
  {
    slug: 'celebrity-brand-fit-over-star-power',
    title: 'Celebrity-Brand Fit: Why the Right Match Matters More Than Star Power',
    description: 'Authentic alignment between a public figure and your brand identity drives campaign success and consumer trust.',
    category: 'Celebrity & Brand Endorsements',
    author: 'Virender',
    date: '2025-05-06',
    readTime: '6 min read',
    image: '/images/entertainment.jpg',
  },
  {
    slug: 'fmcg-d2c-influencer-strategies',
    title: 'How FMCG Brands Win Consumer Recall Through D2C and Influencer Strategies',
    description: 'How top FMCG brands combine D2C growth, influencer campaigns, and partnerships to dominate mindshare.',
    category: 'Industry Insights',
    author: 'Virender',
    date: '2025-05-04',
    readTime: '5 min read',
    image: '/images/influencer.jpg',
  },
  {
    slug: 'hybrid-event-strategies-2026',
    title: 'How Hybrid Event Strategies Are Redefining Brand Activation',
    description: 'Brands are fusing physical spectacle with digital reach—the integrated model for modern brand activation.',
    category: 'Events & Experiences',
    author: 'Virender',
    date: '2025-05-02',
    readTime: '5 min read',
    image: '/images/events.jpg',
  },
  {
    slug: 'fan-engagement-sports-partnerships',
    title: 'How Fan Engagement Is Redefining Sports Partnerships',
    description: 'Fan engagement is the strategy—building deeper connections, loyalty, and ROI through sports partnerships.',
    category: 'Sports Partnerships',
    author: 'Virender',
    date: '2025-04-28',
    readTime: '5 min read',
    image: '/images/sports.jpg',
  },
  {
    slug: 'multi-channel-campaign-consistency',
    title: 'One Brand, Every Platform: Multi-Channel Campaign Consistency',
    description: 'How to build multi-channel consistency that drives brand recall and business results.',
    category: 'Brand Campaign Strategy',
    author: 'Virender',
    date: '2025-04-24',
    readTime: '5 min read',
    image: '/images/strategy.jpg',
  },
  {
    slug: 'regional-influencers-india-brand-asset',
    title: "Why Regional Influencers Are India's Most Underutilised Brand Asset",
    description: 'Vernacular creators in Tier-2 and Tier-3 cities deliver superior ROI for smart brands.',
    category: 'Influencer & Creator Marketing',
    author: 'Virender',
    date: '2025-04-20',
    readTime: '4 min read',
    image: '/images/influencer.jpg',
  },
  {
    slug: 'creator-economy-brand-partnerships-india',
    title: 'The Creator Economy and the Future of Brand Partnerships in India',
    description: 'How brands are shifting from one-off influencer posts to structured creator partnerships with governance, data, and long-term equity.',
    category: 'Influencer & Creator Marketing',
    author: 'Virender',
    date: '2025-05-18',
    readTime: '6 min read',
    image: '/images/influencer.jpg',
  },
  {
    slug: 'brand-safety-influencer-campaigns-india',
    title: 'Brand Safety in Influencer Campaigns: What Indian Marketers Miss',
    description: 'Audience fit and content rights matter — but brand safety systems are what keep influencer scale from becoming a reputation event.',
    category: 'Influencer & Creator Marketing',
    author: 'Virender',
    date: '2026-07-10',
    readTime: '5 min read',
    image: '/images/influencer.jpg',
  },
  {
    slug: 'sports-sponsorship-roi-beyond-impressions',
    title: 'Sports Sponsorship ROI Beyond Impressions',
    description: 'Impressions are easy. Sponsorship value is not. A practical framework for measuring sports partnerships against brand and business goals.',
    category: 'Sports Partnerships',
    author: 'Virender',
    date: '2026-07-12',
    readTime: '5 min read',
    image: '/images/sports.jpg',
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
