export interface TrustedLogo {
  organizationName: string;
  logoSrc: string;
  /** Must be explicitly granted before this entry is used anywhere public-facing. */
  permissionStatus: 'approved' | 'pending';
}

/**
 * Intentionally empty — no client has approved use of their name/logo yet.
 * Do not add placeholder/fake entries; TrustedBySection renders nothing
 * until real, approved logos land in this array.
 */
export const trustedLogos: TrustedLogo[] = [];
