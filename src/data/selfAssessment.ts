export interface SelfAssessmentQuestion {
  id: string;
  text: string;
}

export interface SelfAssessmentCategory {
  key: string;
  name: string;
  questions: SelfAssessmentQuestion[];
}

/**
 * Ported from BBK's original phone-survey tool (Evaluacion estrategica
 * Clinicas.xlsm): 24 statements across 6 categories, each rated 1 (strongly
 * disagree) to 5 (strongly agree), 120 points = 100%. A HIGH score means a
 * strong, well-run organization — the opposite of the platform's internal
 * lead-priority score, which is intentionally inverted server-side (see the
 * Sales Hub's scoring.service.ts) since a low self-assessment score is the
 * higher-opportunity lead.
 */
export const selfAssessmentCategories: SelfAssessmentCategory[] = [
  {
    key: 'digitalPresence',
    name: 'Digital Presence',
    questions: [
      { id: 'dp-1', text: 'Our website clearly communicates who we are, what studies we support, and how to reach us.' },
      { id: 'dp-2', text: 'Our organization maintains an active, professional presence on social media.' },
      { id: 'dp-3', text: 'Our online presence is consistent across our website, listings, and social profiles.' },
      { id: 'dp-4', text: 'People searching online for our organization or our studies can find us easily.' },
      { id: 'dp-5', text: 'Our digital materials (site, profiles, ads) look current and professionally produced.' },
    ],
  },
  {
    key: 'acquisitionStrategy',
    name: 'Acquisition Strategy',
    questions: [
      { id: 'as-1', text: 'We have a defined, repeatable strategy for generating new participant or partner inquiries.' },
      { id: 'as-2', text: 'We run paid or organic campaigns targeted specifically at our studies’ target populations.' },
      { id: 'as-3', text: 'We know which channels (paid social, search, referral, community outreach) perform best for us.' },
      { id: 'as-4', text: 'Our acquisition efforts are coordinated across all participating sites, not run independently.' },
      { id: 'as-5', text: 'We adjust our acquisition strategy based on performance data rather than guesswork.' },
    ],
  },
  {
    key: 'conversion',
    name: 'Conversion',
    questions: [
      { id: 'cv-1', text: 'We follow up with new inquiries quickly (within minutes to hours, not days).' },
      { id: 'cv-2', text: 'We have a defined process for moving an inquiry from first contact to a scheduled visit.' },
      { id: 'cv-3', text: 'Our team is trained on how to communicate with prospective participants or partners.' },
      { id: 'cv-4', text: 'We track how many inquiries actually convert into scheduled or enrolled participants.' },
    ],
  },
  {
    key: 'brandPositioning',
    name: 'Brand Positioning',
    questions: [
      { id: 'bp-1', text: 'Our organization is recognized and trusted within our therapeutic area or local market.' },
      { id: 'bp-2', text: 'We have a clear, consistent message about what sets our organization apart.' },
      { id: 'bp-3', text: 'Our branding (logo, materials, tone) looks professional and unified across every touchpoint.' },
      { id: 'bp-4', text: 'Sponsors, CROs, or partners describe our organization as a strong, reliable collaborator.' },
    ],
  },
  {
    key: 'dataAnalysis',
    name: 'Data Analysis',
    questions: [
      { id: 'da-1', text: 'We regularly review data on where our inquiries and enrollments come from.' },
      { id: 'da-2', text: 'We can say with confidence which marketing efforts deliver the best return.' },
      { id: 'da-3', text: 'We use reporting or dashboards to guide marketing and recruitment decisions, not intuition alone.' },
    ],
  },
  {
    key: 'marketing',
    name: 'Marketing',
    questions: [
      { id: 'mk-1', text: 'We have a defined marketing budget dedicated to recruitment and growth.' },
      { id: 'mk-2', text: 'Our marketing is managed by a dedicated team member or an outside specialist, not handled ad hoc.' },
      { id: 'mk-3', text: 'We feel confident our current marketing approach can scale to support new or larger studies.' },
    ],
  },
];

export const selfAssessmentQuestionCount = selfAssessmentCategories.reduce(
  (sum, c) => sum + c.questions.length,
  0,
);

export type SelfAssessmentTier = 'red' | 'orange' | 'green';

export const TIER_COLOR: Record<SelfAssessmentTier, string> = {
  red: '#c00000',
  orange: '#ed7d31',
  green: '#00b050',
};

export const TIER_LABEL: Record<SelfAssessmentTier, string> = {
  red: 'Significant Opportunity for Growth',
  orange: 'Solid Foundation — Room to Grow',
  green: 'Excellent — Top-Tier Clinical Research Organization',
};

export function getSelfAssessmentTier(percentage: number): SelfAssessmentTier {
  if (percentage <= 40) return 'red';
  if (percentage <= 85) return 'orange';
  return 'green';
}
