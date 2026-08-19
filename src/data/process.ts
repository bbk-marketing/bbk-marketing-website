export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Study Intake',
    description: 'The research organization provides Study information and recruitment requirements.',
  },
  {
    number: '02',
    title: 'Campaign Strategy',
    description: 'BBK defines recruitment geography, messaging, language and creative approach.',
  },
  {
    number: '03',
    title: 'Creative Development',
    description: 'BBK creates the campaign materials.',
  },
  {
    number: '04',
    title: 'Client / IRB Process',
    description:
      'Materials are provided to the client for the applicable IRB review and approval workflow.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Once required approvals are documented, the recruitment campaign begins.',
  },
  {
    number: '06',
    title: 'Recruitment',
    description:
      'Depending on the service selected: traditional campaign management, or BBK RPS participant recruitment and pre-screening workflow.',
  },
];
