/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'd2seqvvyy3b8p2.cloudfront.net',
      'bs.plantnet.org'
    ],
  },
  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  },
};

export default nextConfig;
