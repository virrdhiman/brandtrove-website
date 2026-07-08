export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Brandtrove structured our cricket-season partnership from talent selection through activation design. The campaign delivered strong regional recall and cleaner reporting than our previous agency engagements.',
    name: 'Marketing Director',
    role: 'Brand & Partnerships Lead',
    company: 'FMCG · Pan-India',
    initials: 'MD',
  },
  {
    quote:
      'We needed credible creator partnerships beyond metro influencers. Brandtrove built a tier-2 and tier-3 creator program with clear KPIs — engagement improved materially within the first quarter.',
    name: 'Head of Growth',
    role: 'D2C & Digital',
    company: 'Consumer Technology',
    initials: 'HG',
  },
  {
    quote:
      'The team focused on celebrity-brand fit before negotiating terms. That discipline saved us from a high-visibility but low-credibility partnership and led to a stronger long-term endorsement structure.',
    name: 'CMO',
    role: 'Marketing Leadership',
    company: 'Lifestyle & Fashion',
    initials: 'CM',
  },
  {
    quote:
      'Our hybrid product launch required on-ground spectacle and digital amplification in sync. Brandtrove managed both layers with one timeline — the event content still performs months later.',
    name: 'VP Marketing',
    role: 'Brand Activation',
    company: 'Technology · B2C',
    initials: 'VP',
  },
];
