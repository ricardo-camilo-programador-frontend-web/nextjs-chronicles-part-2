'use client';

import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from '@/components/general/link';
import { SOCIAL_LINKS } from '@/lib/data';
import EnterAnimation from '@/components/animation/EnterAnimation';

const Social = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  const randomFromZeroToNinetnine = Math.floor(Math.random() * 10)
  return (
    <div
      className={twMerge(
        'flex gap-5 text-md',
        variant === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
      )}>
      {SOCIAL_LINKS.map((link, index) => (
        <Fragment key={link.href}>
          <EnterAnimation
            duration={0.4 + index * 0.1}
            visualDuration={0.4 + index * 0.2}
          >
            <Link
              className="transform transition-all duration-300 ease-in-out hover:rotate-12 cursor-pointer hover:text-primary hover:scale-150"
              variant={variant}
              href={link.href}
              externalLink>
              <link.icon />
            </Link>
          </EnterAnimation>
        </Fragment>
      ))}
    </div>
  );
};

export default Social;
