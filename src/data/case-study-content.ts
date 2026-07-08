export const CASE_STUDY_CONTENT: Record<string, string> = {
  'fmcg-cricket-season-campaign': `An FMCG brand needed cricket-season visibility that went beyond logo placement — they required regional trust, retail pull-through, and content that worked across TV, digital, and point-of-sale.

## Challenge

Previous sports spends delivered national impressions but weak localized recall. Retail teams in key states could not connect sponsorship activity to shelf movement.

## Approach

Brandtrove mapped state-level cricket affinity, shortlisted athlete partners with regional credibility, and designed an activation calendar aligned to league phases and festival retail windows.

## Execution

- Athlete content series in regional languages
- Retail partner kits tied to match-day windows
- Digital amplification through creator cut-downs and fan engagement formats
- Unified reporting dashboard for marketing and sales teams

## Outcome

The campaign improved regional brand tracking scores and gave retail a clearer narrative to activate in-store. The partnership structure was renewed for a multi-year framework with performance gates.`,

  'regional-influencer-d2c-scale': `A fast-growing D2C brand had saturated metro creator channels and needed authentic reach in Bharat — without losing brand safety or message consistency.

## Challenge

Metro influencer CPMs were rising while conversion in target growth states remained underdeveloped. The brand lacked a repeatable model for vernacular creator governance.

## Approach

We built a tiered creator program: category-fit screening, regional language content templates, approval workflows, and KPI definitions tied to engagement quality—not vanity views alone.

## Execution

- 40+ creators across six states
- Vernacular scripts aligned to product benefits
- Whitelisting and usage rights structured upfront
- Monthly performance reviews with creator tier adjustments

## Outcome

Cost per engaged viewer improved versus prior metro campaigns. The client scaled the program into a always-on regional layer alongside national brand campaigns.`,

  'celebrity-fit-endorsement-restructure': `A lifestyle brand was mid-contract with a high-visibility celebrity whose audience overlap and category credibility no longer matched evolving brand positioning.

## Challenge

Renewing by fame alone would increase cost and brand risk. Internal teams needed a structured alternative before the next negotiation window.

## Approach

Brandtrove ran a fit audit: audience overlap, sentiment analysis, category authenticity, and competitive mapping. We shortlisted partners with stronger alignment at lower reputational risk.

## Execution

- Exit/transition plan for existing partnership
- New endorsement architecture with milestone-based deliverables
- Content playbook emphasizing product integration over generic fame
- Legal review of usage, exclusivity, and morals clauses

## Outcome

The restructured partnership improved content engagement and reduced negative sentiment in social listening. Brand tracking showed stronger association with the brand's premium tier message.`,

  'hybrid-tech-product-launch': `A consumer technology brand planned a flagship launch requiring simultaneous press, creator coverage, and an experiential event for partners and media.

## Challenge

Prior launches treated event and digital as separate agencies with conflicting timelines. Post-event content dropped off within days.

## Approach

Brandtrove unified strategy, talent booking, event experience design, and digital content capture under one program plan with shared milestones.

## Execution

- Hybrid launch event with demo zones and creator broadcast slots
- Same-day short-form content pipeline
- Ambassador appearances aligned to key product story beats
- Post-event content library for paid and organic reuse

## Outcome

Launch-week share of voice exceeded internal targets. Repurposed event content continued driving consideration eight weeks post-launch, improving overall campaign ROI.`,
};

export function getCaseStudyContent(slug: string, fallback: string): string {
  return CASE_STUDY_CONTENT[slug] ?? fallback;
}
