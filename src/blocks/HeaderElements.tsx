'use client';

import type { FC } from 'react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Menu, Xmark } from 'iconoir-react';
import { twMerge } from 'tailwind-merge';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/general/drawer';
import Link, { LinkProps } from '@/components/general/link';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { locales } from '@/config/i18n-config';

interface HeaderProps {
  navLinks: Array<{
    label: string;
    href: string;
  }>;
}

const Header: FC<HeaderProps> = ({ navLinks }) => {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  const homePaths = ['/', ...locales.map(locale => `/${locale}`)];
  const isHomePage = homePaths.includes(pathname);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderHomePageSectionNavLinks = () => {
    return navLinks.map((link) => (
      <li key={link.label}>
        <Link href={link.href}>{t(link.label)}</Link>
      </li>
    ));
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>

      {isHomePage && (
        <ul className="flex gap-8 max-md:hidden max-lg:gap-4">
          {renderHomePageSectionNavLinks()}
        </ul>
      )}
      <div className="flex gap-8 items-center">
        <div className="my-auto">
          <LanguageSwitcher />
        </div>

        <Link
          href={isHomePage ? '/beyond-bio' : '/'}
          className={isHomePage ? 'max-md:hidden' : 'max-sm:hidden'}>
          {isHomePage ? t('beyond-bio') : t('home')}
        </Link>
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger
          asChild
          className={twMerge(isHomePage ? 'flex md:hidden' : 'sm:hidden')}>
          <Menu />
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex items-center justify-between border-b border-zinc-100 p-4 bg-white">
            <p className="text-base font-medium uppercase text-zinc-900 tracking-[1px]">
              RICARDO CAMILO
            </p>
            <DrawerClose asChild>
              <Xmark height={20} width={20} />
            </DrawerClose>
          </div>
          <div className="border-b border-zinc-100 p-4 bg-white h-screen">
            <ul className="flex flex-col gap-2 max-lg:gap-4">
              <li className="py-4">
                <Link href={isHomePage ? '/beyond-bio' : '/'}>
                  {isHomePage ? t('beyond-bio') : t('home')}
                </Link>
              </li>
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
