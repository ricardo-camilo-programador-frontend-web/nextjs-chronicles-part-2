import { FC } from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  siteName?: string;
  locale?: string;
}

export const SEO: FC<SEOProps> = ({
  title,
  description,
  image = 'src/assets/images/open-graph-ricardo.png',
  url,
  type = 'website',
  siteName = 'Ricardo Camilo - Programador Frontend Web Developer',
  locale = 'en',
}) => {
  const absoluteImageUrl = image;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
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