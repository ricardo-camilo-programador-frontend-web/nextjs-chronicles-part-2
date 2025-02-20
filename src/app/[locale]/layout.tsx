import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import IntroWarningModal from "@/blocks/IntroWarningModal";
import Header from "@/components/layout/header";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/config/i18n-config';

import "./globals.css";
import "@/assets/css/scrollDriven.css";
import "@/assets/css/animatedUnderline.css";
import "@/assets/css/pageTransition.css";
import "@/assets/css/scrollDriven.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const title =
  "RICARDO CAMILO Programador | Programador Frontend Especialista em React & Vue.js";
const description =
  "Desenvolvedor Frontend com 4 anos de experiência em Jaú-SP, especializado em React, Vue.js e tecnologias modernas. Criação de interfaces responsivas, Landing Pages, otimizadas para performance. Atendimento remoto e em Jaú e região.";
const url = process.env.NEXT_PUBLIC_SITE_URL || "";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ricardo Camilo",
  "jobTitle": "Desenvolvedor Frontend",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaú",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "knowsAbout": ["React", "Vue.js", "JavaScript", "Frontend Development"],
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "workLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaú",
      "addressRegion": "SP"
    }
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Desenvolvedor Frontend",
    "Desenvolvedor React",
    "Desenvolvedor Vue.js",
    "Programador Frontend",
    "Programador React",
    "Programador Vue.js",
    "Especialista Frontend",
    "Desenvolvimento Web",
    "Desenvolvedor Frontend Jaú",
    "Desenvolvedor React Jaú SP",
    "Programador Vue.js Jaú",
    "Desenvolvedor Web Jaú e Região",
    "Desenvolvedor Frontend São Paulo Interior",
    "Freelancer Frontend Jaú",
    "Desenvolvedor JavaScript Jaú",
    "Desenvolvimento Web Bauru",
    "Criação de Sites Jaú",
    "UI/UX",
    "Performance Web",
    "TypeScript",
    "Next.js",
    "Nuxt.js",
    "Clean Code",
    "Design Systems",
    "Frontend Brasil",
    "Desenvolvedor React Brasil",
    "Abyss Tech",
    "Astro.js",
    "Tailwind CSS",
    "Material UI",
    "Frontend Architecture",
    "Web Performance Optimization",
    "Landing Page",
    "Landing Page Jaú",
    "Landing Page São Paulo",
    "Landing Page Bauru",
  ],
  creator: "Ricardo Camilo",
  authors: [
    {
      name: "Ricardo Camilo",
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    },
  ],
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    locale: "en",
    images: [
      {
        url: "/images/open-graph-ricardo.png",
        width: 1200,
        height: 630,
        alt: "Ricardo Camilo - Desenvolvedor Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: process.env.NEXT_PUBLIC_TWITTER_URL,
    creator: process.env.NEXT_PUBLIC_TWITTER_URL,
    images: ["/images/open-graph-ricardo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: url,
  },
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error("Error loading messages", error)
    notFound();
  }
}
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const messages = await getMessages(resolvedParams.locale);

  return (
    <html lang={resolvedParams.locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${montserrat.className} flex justify-center w-full flex-col`}>
        <NextIntlClientProvider messages={messages} locale={resolvedParams.locale}>
          <Header />
          <main>{children}</main>
          <IntroWarningModal
            projectTitle={process.env.PROJECT_TITLE || ""}
            githubUsername={process.env.NEXT_PUBLIC_GITHUB_URL || ""}
            linkedinUsername={process.env.NEXT_PUBLIC_LINKEDIN_URL || ""}
            figmaUsername={process.env.NEXT_PUBLIC_FIGMA_URL || ""}
            figmaOriginalDesign={process.env.NEXT_PUBLIC_FIGMA_ORIGINAL_DESIGN || ""}
          />
        </NextIntlClientProvider>
        <div className="scroll-indicator"></div>
      </body>
      <Script
        src="https://cdn.counter.dev/script.js"
        data-id={process.env.COUNTER_API_KEY}
        data-utcoffset="-3"
      />
    </html>
  );
}
