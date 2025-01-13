import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import IntroWarningModal from "@/blocks/IntroWarningModal";
import "./globals.css";
import Header from "@/components/layout/header";
import Script from "next/script";
import { NextIntlClientProvider, useMessages } from 'next-intl';

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
    "Ricardo Camilo",
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
      url: `https://linkedin.com/in/${process.env.GITHUB_USERNAME}`,
    },
  ],
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    locale: "pt_BR",
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
    site: process.env.TWITTER_USERNAME,
    creator: process.env.TWITTER_USERNAME,
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

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${montserrat.className} flex justify-center w-full flex-col`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Header />
          <main>{children}</main>
          <IntroWarningModal
            projectTitle={process.env.PROJECT_TITLE || ""}
            githubUsername={process.env.GITHUB_USERNAME || ""}
            linkedinUsername={process.env.LINKEDIN_USERNAME || ""}
            figmaUsername={process.env.FIGMA_USERNAME || ""}
            figmaOriginalDesign={process.env.FIGMA_ORIGINAL_DESIGN || ""}
          />
        </NextIntlClientProvider>
      </body>

      <Script
        src="https://cdn.counter.dev/script.js"
        data-id={process.env.COUNTER_API_KEY}
        data-utcoffset="-3"
      ></Script>
    </html>
  );
}
