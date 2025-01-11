import Image from 'next/image';

import { ArrowLeft } from 'iconoir-react';

import Riddhi from '/public/images/riddhi-beyond-bio.png';
import Footer from '@/components/layout/footer';
import AboutMe from '@/components/sections/about-me';
import Link from '@/components/general/link';

const BeyondBio = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AboutMe />

      <Footer variant="light" />
      <div className="fixed bottom-10 left-10 max-lg:invisible">
        <Link href="/">
          <div className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center text-white">
            <ArrowLeft height={16} width={16} />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default BeyondBio;
