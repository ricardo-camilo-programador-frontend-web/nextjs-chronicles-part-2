/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'persona-nextjs-chronicles-part-2.netlify.app'
    ],
  },
  basePath: '/persona-nextjs-chronicles-part-2',
};

export default nextConfig;
