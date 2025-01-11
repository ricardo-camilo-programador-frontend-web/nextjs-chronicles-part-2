import { Linkedin, Github, X } from 'iconoir-react';

import LogoJavaScript from '@/public/icons/icon-javascript.svg';
import LogoTypeScript from '@/public/icons/icon-typescript.svg';
import LogoReact from '@/public/icons/icon-react.svg';
import LogoNextjs from '@/public/icons/icon-nextjs.svg';
import LogoSass from '@/public/icons/icon-sass.svg';
import LogoTailwindCss from '@/public/icons/icon-tailwindcss.svg';
import LogoFigma from '@/public/icons/icon-figma.svg';
import LogoMUI from '@/public/icons/icon-mui.svg';

import IllustrationBreathNatural from '@/public/images/breath-natural.webp';
import IllustrationFoodHut from '@/public/images/food-hut.webp';

import AvatarNoren from '@/public/images/avatar-noren.png';

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
];

export const PROJECTS = [
  {
    name: '🪴Breath Natural - NextJS',
    description:
      'Aplicação desenvolvida como parte do NextJS Chronicles, demonstrando como um mockup pode ser expandido para um possivel e-commerce e se tornar mais atrativo com animações e interações.',
    techs: [
      'TypeScript',
      'NextJS',
      'TailwindCSS',
      'Figma',
    ],
    previewImage: IllustrationBreathNatural,
    color: {
      bgColor: '#3cb371',
      borderColor: '#3cb371',
    },
    colorClass: {
      bgColor: 'bg-green-100',
      borderColor: 'border-green-700',
    },
    isDescriptionOnLeft: false,
    href: 'https://breath-natural-nextjs-chronicles.netlify.app/',
  },
  {
    name: '🍽️ Food Hut - AngularJS',
    description:
      'Projeto desenvolvido como parte do Angular Chronicles, focado em demonstrar as melhores práticas de desenvolvimento frontend com Angular. Implementa um sistema de pedidos de comida com interface responsiva e moderna.',
    techs: [
      'TypeScript',
      'Angular',
      'Figma',
    ],
    previewImage: IllustrationFoodHut,
    color: {
      bgColor: '#FF0000',
      borderColor: '#8B0000',
    },
    colorClass: {
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-700',
    },
    isDescriptionOnLeft: false,
    href: 'https://food-hut-angular-chronicles-1.netlify.app/',
  }
];

export const TESTIMONIALS = [
  {
    name: 'Ricardo Camilo',
    company: 'Fundador, Abyss Tech',
    testimonial: `"Sou um desenvolvedor frontend com 4 anos de experiência, apaixonado por transformar ideias em interfaces excepcionais. Minha abordagem metódica e atenção aos detalhes me permitiram alcançar resultados significativos, como no projeto TippBank, onde consegui reduzir o tempo de carregamento em 40% através de otimizações de performance. Cada linha de código que escrevo reflete meu compromisso com a excelência e a experiência do usuário."`,
    avatar: AvatarNoren,
  },
  {
    name: 'Ricardo Camilo',
    company: 'Especialista Frontend, Abyss Tech',
    testimonial: `"Como fundador da Abyss Tech, lidero projetos que vão além do desenvolvimento de interfaces - criamos experiências memoráveis. Minha expertise em Vue.js e React.js me permite transformar visões em realidade digital. Tenho orgulho de dizer que meu compromisso com código limpo e performance já impactou milhares de usuários, especialmente na plataforma Loor.vc, um dos nossos casos de sucesso."`,
    avatar: AvatarNoren,
  },
  {
    name: 'Ricardo Camilo',
    company: 'Desenvolvedor Frontend, Abyss Tech',
    testimonial: `"Mantenho-me constantemente atualizado com as evoluções tecnológicas e as crescentes expectativas dos usuários. Como desenvolvedor, trago para cada projeto uma combinação única de experiência técnica e visão estratégica. Seja desenvolvendo uma landing page de alto impacto ou um e-commerce complexo, meu foco está em entregar não apenas código, mas resultados que verdadeiramente impulsionam negócios."`,
    avatar: AvatarNoren,
  },
];

export const FOOTERLINKS = [
  {
    label: 'GITHUB',
    href: `https://github.com/${process.env.GITHUB_USERNAME}`,
  },
  {
    label: 'FIGMA',
    href: `https://www.figma.com/${process.env.FIGMA_USERNAME}`,
  },
  {
    label: 'TWITTER',
    href: `https://x.com/${process.env.X_USERNAME}`,
  },
  {
    label: 'CV',
    href: `https://www.linkedin.com/in/${process.env.LINKEDIN_USERNAME}`,
  },
];

export const BIT_OF_ME = [
  {
    emoji: '📚',
    text: 'Sou um ávido leitor de novels chinesas e mangás, mergulhando em mundos fantásticos que expandem minha criatividade.',
  },
  {
    emoji: '🎬',
    text: 'Apaixonado por ficção científica, encontro inspiração para inovação através de filmes e séries que exploram os limites da tecnologia e imaginação.',
  },
  {
    emoji: '🐱',
    text: 'Tenho cinco gatos: Hercules, Johan, Lady, Princesa e Aladin. Cada um com sua personalidade única, trazendo alegria e companheirismo ao meu dia a dia.',
  },
  {
    emoji: '💻',
    text: 'Como desenvolvedor, encontro na programação uma forma de criar experiências digitais tão fascinantes quanto as histórias que leio.',
  },
  {
    emoji: '🌙',
    text: 'Nas horas vagas, gosto de relaxar com meus gatos, uma boa novel chinesa e uma xícara de café, equilibrando o mundo técnico com momentos de tranquilidade.',
  },
  {
    emoji: '🎮',
    text: 'Apreciador de narrativas bem construídas, seja em livros, mangás ou jogos, sempre buscando histórias que me inspirem tanto pessoal quanto profissionalmente.',
  }
];

export const SOCIAL_LINKS = [
  {
    label: 'Github',
    icon: Github,
    href: `https://github.com/${process.env.GITHUB_USERNAME}`,
  },
  {
    label: 'X',
    icon: X,
    href: `https://x.com/${process.env.X_USERNAME}`,
  },
  {
    label: 'Linkedin',
    icon: Linkedin,
    href: `https://www.linkedin.com/in/${process.env.LINKEDIN_USERNAME}`,
  },
];
