export interface Differentiator {
  title: string;
  description: string;
  icon: 'focus' | 'shield' | 'globe' | 'message' | 'sites' | 'growth';
}

export const differentiators: Differentiator[] = [
  {
    title: 'Clinical Research Focus',
    description: 'Campaign strategy designed around the realities of research recruitment.',
    icon: 'focus',
  },
  {
    title: 'IRB-Aware Creative Development',
    description: 'Recruitment materials developed with the review process in mind.',
    icon: 'shield',
  },
  {
    title: 'Bilingual Campaign Production',
    description: 'English and Spanish campaign materials when required.',
    icon: 'globe',
  },
  {
    title: 'Participant-Centered Messaging',
    description: 'Advertising designed around how participants and caregivers actually respond.',
    icon: 'message',
  },
  {
    title: 'Multi-Site Campaign Strategy',
    description: 'Centralized recruitment approaches capable of supporting multiple research locations.',
    icon: 'sites',
  },
  {
    title: 'Business Growth Perspective',
    description:
      'BBK evaluates more than clicks and impressions — we consider the broader growth goals of the research organization.',
    icon: 'growth',
  },
];
