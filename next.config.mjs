/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// Hosts do anúncio Adsterra (Native Banner, invoke.js). Os domínios de runtime
// rotacionam a cada requisição — se o banner vier vazio, revisar esta lista
// pelos reports de CSP / console (skill adsterra-native-banner v1.1.0).
const ADSTERRA_SCRIPT_HOSTS = [
  'https://*.profitableratecpmnetwork.com',
  'https://*.effectivegatecpm.com',
  'https://www.highperformanceformat.com',
  'https://fizzyacerbitymellow.com',
  'https://sleepoverlimitprofound.com',
  'https://exemplarfederallithe.com',
  'https://furiousexpansion.com',
  'https://consumeririssalary.com',
].join(' ');
// XHR /stats do invoke.js (só connect-src).
const ADSTERRA_CONNECT_EXTRA = 'https://protrafficinspector.com';
// iframe index.html do anúncio (só frame-src).
const ADSTERRA_FRAME_EXTRA = 'https://cdn.cloudvideosa.com';

// Mantem os headers de seguranca tambem nas respostas servidas pelo runtime
// do Next na Netlify (o bloco [[headers]] do netlify.toml nao chega nelas).
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      `default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.analytics.google.com https://*.clarity.ms https://c.bing.com https://cdn.counter.dev ${ADSTERRA_SCRIPT_HOSTS}; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com https://t.counter.dev ${ADSTERRA_SCRIPT_HOSTS} ${ADSTERRA_CONNECT_EXTRA}; frame-src https://www.youtube.com https://player.vimeo.com https://www.dailymotion.com https://coub.com ${ADSTERRA_SCRIPT_HOSTS} ${ADSTERRA_FRAME_EXTRA}; form-action 'self'; upgrade-insecure-requests`,
  },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  // Desliga o streaming de metadata do Next 15.2+: sem isso o <title>/<meta
  // description> vai para o <body> e o Lighthouse/SEO nao encontra.
  htmlLimitedBots: /.*/,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  images: {
    unoptimized: true,
    domains: [
      'd2seqvvyy3b8p2.cloudfront.net',
      'bs.plantnet.org'
    ],
  },
};

export default withNextIntl(nextConfig);
