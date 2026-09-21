export interface CaseStudy {
  therapeuticArea: string;
  campaignObjective: string;
  geography: string;
  duration: string;
  recruitmentApproach: string;
  verifiedResult: string;
  clientName?: string;
  clientLogo?: string;
  /** Must be explicitly granted before this entry is used anywhere public-facing. */
  permissionStatus: 'approved' | 'pending';
}

/**
 * Intentionally empty — no client has approved case-study content for
 * publication yet. Do not add placeholder/fake entries here; CaseStudiesSection
 * renders nothing until real, approved data lands in this array.
 */
export const caseStudies: CaseStudy[] = [];
