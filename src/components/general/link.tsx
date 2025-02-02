import type { FC, ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { twMerge } from 'tailwind-merge';

export interface LinkProps extends NextLinkProps {
  className?: string;
  externalLink?: boolean;
  withUnderline?: boolean;
  href: string;
  variant?: 'light' | 'dark';
  rel?: string;
  title?: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({
  children,
  href,
  variant = 'light',
  className,
  withUnderline,
  externalLink,
  rel,
  title,
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      target={externalLink ? '_blank' : '_self'}
      className={twMerge(
        'w-max text-base',
        variant === 'light'
          ? 'text-zinc-950 hover:underline hover:text-zinc-950 hover:underline-offset-4 hover:decoration-zinc-200 active:text-zinc-950'
          : 'text-white hover:underline hover:text-zinc-200 hover:underline-offset-4 hover:decoration-zinc-200 active:text-white',
        withUnderline && 'underline underline-offset-4',
        className
      )}
      rel={rel}
      title={title}
    >
      {children}
    </NextLink>
  );
};

export default Link;
