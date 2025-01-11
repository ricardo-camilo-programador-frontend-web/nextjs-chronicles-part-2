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
};

export default nextConfig;
