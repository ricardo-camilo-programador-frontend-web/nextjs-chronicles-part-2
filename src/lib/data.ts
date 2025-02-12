import { Linkedin, Github, X, Instagram } from 'iconoir-react';

import LogoJavaScript from '@/public/icons/icon-javascript.svg';
import LogoTypeScript from '@/public/icons/icon-typescript.svg';
import LogoReact from '@/public/icons/icon-react.svg';
import LogoNextjs from '@/public/icons/icon-nextjs.svg';
import LogoSass from '@/public/icons/icon-sass.svg';
import LogoTailwindCss from '@/public/icons/icon-tailwindcss.svg';
import LogoFigma from '@/public/icons/icon-figma.svg';
import LogoMUI from '@/public/icons/icon-mui.svg';
import LogoVue from '@/public/icons/icon-vue.svg';
import LogoNuxt from '@/public/icons/icon-nuxt.svg';
import LogoAstro from '@/public/icons/icon-astro.svg';
import LogoVuetify from '@/public/icons/icon-vuetify.svg';
import LogoVite from '@/public/icons/icon-vite.svg';
import LogoQwik from '@/public/icons/icon-qwik.svg';
import LogoAngular from '@/public/icons/icon-angular.svg';
import LogoAxios from '@/public/icons/icon-axios.svg';

export const NAV_LINKS = [
  {
    children: 'Jornada',
    href: '#journey',
  },
  {
    children: 'Trabalhos',
    href: '#work',
  },
  {
    children: 'Depoimentos',
    href: '#testimonials',
  },
  {
    children: 'Contato',
    href: '#contact',
  },
];

export const SKILLS = [
  {
    label: 'JavaScript',
    icon: LogoJavaScript,
  },
  {
    label: 'TypeScript',
    icon: LogoTypeScript,
  },
  {
    label: 'React',
    icon: LogoReact,
  },
  {
    label: 'Next.js',
    icon: LogoNextjs,
  },
  {
    label: 'Tailwind Css',
    icon: LogoTailwindCss,
  },
  {
    label: 'Scss',
    icon: LogoSass,
  },
  {
    label: 'MUI',
    icon: LogoMUI,
  },
  {
    label: 'Figma',
    icon: LogoFigma,
  },
  {
    label: 'Vue.js',
    icon: LogoVue,
  },
  {
    label: 'Nuxt.js',
    icon: LogoNuxt,
  },
  {
    label: 'Astro',
    icon: LogoAstro,
  },
  {
    label: 'Vuetify',
    icon: LogoVuetify,
  },
  {
    label: 'Vite',
    icon: LogoVite,
  },
  {
    label: 'Qwik',
    icon: LogoQwik,
  },
  {
    label: 'NextJS',
    icon: LogoNextjs,
  },
  {
    label: 'Angular',
    icon: LogoAngular,
  },
  {
    label: 'Axios',
    icon: LogoAxios,
  },
];

export const FOOTERLINKS = [
  {
    label: 'GITHUB',
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    label: 'FIGMA',
    href: process.env.NEXT_PUBLIC_FIGMA_URL,
  },
  {
    label: 'TWITTER',
    href: process.env.NEXT_PUBLIC_X_URL,
  },
  {
    label: 'CV',
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
];

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    icon: Instagram,
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
  {
    label: 'Linkedin',
    icon: Linkedin,
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  {
    label: 'Github',
    icon: Github,
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    label: 'X',
    icon: X,
    href: process.env.NEXT_PUBLIC_X_URL,
  },
];
