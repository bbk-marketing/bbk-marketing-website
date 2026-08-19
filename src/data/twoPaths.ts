export interface PathOption {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}

export const twoPaths: PathOption[] = [
  {
    eyebrow: 'Option 1',
    title: 'Managed Clinical Research Marketing',
    description:
      'Best for organizations that want BBK to develop and manage their digital recruitment campaigns.',
    bullets: [
      'Campaign strategy',
      'Creative development',
      'Advertising management',
      'Lead generation',
      'Reporting',
    ],
    ctaLabel: 'Discuss a Marketing Campaign',
    ctaHref: '#contact',
  },
  {
    eyebrow: 'Option 2',
    title: 'BBK Research Participant Solutions',
    description: 'A more structured recruitment service.',
    bullets: [
      'BBK-managed participant acquisition',
      'Participant registration',
      'Engagement',
      'Preliminary pre-screening',
      'Human follow-up and referral workflow',
      'Recruiter Dashboard',
    ],
    ctaLabel: 'Explore BBK RPS',
    ctaHref: '#patient-recruitment',
    featured: true,
  },
];
