export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: 'target' | 'creative' | 'growth' | 'rps';
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'clinical-research-marketing',
    number: '01',
    title: 'Clinical Research Marketing',
    description:
      'Campaign strategy and digital advertising designed specifically for research participant recruitment.',
    bullets: [
      'Meta advertising',
      'Google strategy where applicable',
      'Campaign setup and audience development',
      'Geographic targeting',
      'Campaign optimization',
    ],
    icon: 'target',
    ctaLabel: 'Discuss a Marketing Campaign',
    ctaHref: '#contact',
  },
  {
    id: 'recruitment-creative-content',
    number: '02',
    title: 'Recruitment Creative & Content',
    description:
      'Video, copy and bilingual creative built around how participants and caregivers actually respond.',
    bullets: [
      'Video production and voice-over',
      'Scripts and advertising copy',
      'Bilingual materials (English / Spanish)',
      'Translation coordination',
      'Participant-facing digital content',
    ],
    icon: 'creative',
    ctaLabel: 'Discuss Creative Production',
    ctaHref: '#contact',
  },
  {
    id: 'business-growth-digital-strategy',
    number: '03',
    title: 'Business Growth & Digital Strategy',
    description:
      'Positioning and digital infrastructure for research organizations that want to grow beyond a single campaign.',
    bullets: [
      'Market positioning',
      'Business-development support',
      'Corporate branding and website strategy',
      'CRM / automation consulting',
      'Scalable operational marketing',
    ],
    icon: 'growth',
    ctaLabel: 'Discuss Business Growth',
    ctaHref: '#business-growth',
  },
  {
    id: 'participant-recruitment-rps',
    number: '04',
    title: 'Participant Recruitment — BBK RPS',
    description:
      'A structured recruitment model, built and operated through BBK Research Participant Solutions.',
    bullets: [
      'Participant acquisition and engagement',
      'Preliminary pre-screening workflow',
      'Human follow-up',
      'Referral management',
      'Multi-site routing and recruitment analytics',
    ],
    icon: 'rps',
    ctaLabel: 'Explore BBK RPS',
    ctaHref: '#patient-recruitment',
    featured: true,
  },
];
