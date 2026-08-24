export interface NavItem {
  label: string;
  href: string;
}

/**
 * Phase A (homepage-only launch): most items point to homepage anchor
 * sections, prefixed with "/" so they resolve correctly from every page
 * (blog posts, legal pages), not just the homepage itself. Phase B will
 * give each of these a dedicated route (e.g. /clinical-research-marketing)
 * — swap the href here, no structural change needed elsewhere.
 */
export const navItems: NavItem[] = [
  { label: 'Clinical Research Marketing', href: '/#clinical-research-marketing' },
  { label: 'Business Growth', href: '/#business-growth' },
  { label: 'Patient Recruitment', href: '/#patient-recruitment' },
  { label: 'Our Process', href: '/#our-process' },
  { label: 'About BBK', href: '/#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export const primaryCta: NavItem = { label: 'Request a Consultation', href: '/#contact' };
export const secondaryCta: NavItem = { label: 'Explore Participant Recruitment', href: '/#patient-recruitment' };
