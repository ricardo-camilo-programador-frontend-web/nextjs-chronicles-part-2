import { FC } from 'react';
import Head from 'next/head';
import openGraphImage from '@/assets/images/open-graph-ricardo.png';    

interface SEOProps {
  title: string;
  description: string;
  url: string;
  keywords?: string;
  image?: string;
  type?: string;
  siteName?: string;
  locale?: string;
}

export const SEO: FC<SEOProps> = ({
  title,
  description = 'Ricardo Camilo - Programador Frontend Web Developer - Freelancer - Open To Work',
  keywords = 'Ricardo Camilo, Programador Frontend, Web Developer, Freelancer, Open To Work, Landing Page, Portfolio, CV, Resume, About Me, Work, Testimonials, Companies, React, Next, Nuxt, Angular, Astrojs, Qwikjs',
  image = openGraphImage.src,
  url,
  type = 'website',
  siteName = 'Ricardo Camilo - Programador Frontend Web Developer',
  locale = 'en',
}) => {
  const absoluteImageUrl = image.startsWith('http') 
    ? image 
    : `${process.env.NEXT_PUBLIC_SITE_URL}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* WhatsApp */}
      <meta property="og:image:alt" content={title} />
      
      {/* LinkedIn */}
      <meta property="linkedin:card" content="summary_large_image" />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={absoluteImageUrl} />

      {/* Pinterest */}
      <meta name="pinterest:card" content="summary_large_image" />
      <meta name="pinterest:title" content={title} />
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
    </Head>
  );
}; 