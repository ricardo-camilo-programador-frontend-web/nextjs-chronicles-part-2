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
import LogoI18n from '@/public/icons/icon-i18n.svg';

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
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  {
    label: 'TypeScript',
    icon: LogoTypeScript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    icon: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    icon: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Tailwind Css',
    icon: LogoTailwindCss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Scss',
    icon: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'MUI',
    icon: LogoMUI,
    url: 'https://mui.com/',
  },
  {
    label: 'Figma',
    icon: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Vue.js',
    icon: LogoVue,
    url: 'https://vuejs.org/',
  },
  {
    label: 'Nuxt.js',
    icon: LogoNuxt,
    url: 'https://nuxt.com/',
  },
  {
    label: 'Astro',
    icon: LogoAstro,
    url: 'https://astro.build/',
  },
  {
    label: 'Vuetify',
    icon: LogoVuetify,
    url: 'https://vuetifyjs.com/',
  },
  {
    label: 'Vite',
    icon: LogoVite,
    url: 'https://vitejs.dev/',
  },
  {
    label: 'Qwik',
    icon: LogoQwik,
    url: 'https://qwik.dev/',
  },
  {
    label: 'NextJS',
    icon: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Angular',
    icon: LogoAngular,
    url: 'https://angular.dev/',
  },
  {
    label: 'Axios',
    icon: LogoAxios,
    url: 'https://axios-http.com/',
  },
  {
    label: 'i18n',
    icon: LogoI18n,
    url: 'https://www.i18next.com/',
  }
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
