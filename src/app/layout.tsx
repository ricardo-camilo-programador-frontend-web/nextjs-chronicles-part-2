import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import Header from '@/components/layout/header';

const montserrat = Montserrat({ subsets: ['latin'] });

const title = 'RICARDO CAMILO Programador | Desenvolvedor Frontend Especialista em React & Vue.js';
const description =
  'Programador frontend com 4 anos de experiência, especializado em criar interfaces modernas e escaláveis. Expert em React.js, Vue.js e otimização de performance.';
const url = 'https://ricardocamilo.dev.br';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Desenvolvedor Frontend',
    'Desenvolvedor React',
    'Desenvolvedor Vue.js',
    'Programador Frontend',
    'Programador React',
    'Programador Vue.js',
    'Especialista Frontend',
    'Desenvolvimento Web',
    'UI/UX',
    'Performance Web',
    'TypeScript',
    'Next.js',
    'Nuxt.js',
    'Clean Code',
    'Design Systems',
    'Frontend Brasil',
    'Desenvolvedor React Brasil',
    'Abyss Tech',
    'Ricardo Camilo',
  ],
  creator: 'Ricardo Camilo',
  authors: [{ name: 'Ricardo Camilo', url: `https://linkedin.com/in/${process.env.GITHUB_USERNAME}` }],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    locale: 'pt_BR',
    images: [
      {
        url: '/images/open-graph-ricardo.png',
        width: 1200,
        height: 630,
        alt: 'Ricardo Camilo - Desenvolvedor Frontend'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    site: process.env.TWITTER_USERNAME,
    creator: process.env.TWITTER_USERNAME,
    images: ['/images/open-graph-ricardo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: url,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.className} flex justify-center w-full flex-col`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}