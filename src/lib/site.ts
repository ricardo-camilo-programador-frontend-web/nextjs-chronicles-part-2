/** Production origin. Deploy previews and localhost must not match this host. */
export const CANONICAL_SITE_ORIGIN = "https://persona-nextjs-chronicles-part-2.netlify.app";

/**
 * Public site origin. `NEXT_PUBLIC_SITE_URL` overrides the canonical constant
 * when it is an absolute http(s) URL; otherwise the canonical origin is used.
 */
export function resolveSiteOrigin(siteUrl: string | undefined): string {
  const trimmed = siteUrl?.trim();
  if (!trimmed) return CANONICAL_SITE_ORIGIN;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return CANONICAL_SITE_ORIGIN;
    return url.origin;
  } catch {
    return CANONICAL_SITE_ORIGIN;
  }
}

/** Resolved at build time so server metadata and the ad slot share one origin. */
export const SITE_ORIGIN = resolveSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL);

export function canonicalHostname(siteUrl?: string): string {
  return new URL(resolveSiteOrigin(siteUrl)).hostname;
}
