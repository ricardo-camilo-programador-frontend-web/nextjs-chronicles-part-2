import { ArrowLeft } from 'iconoir-react';
import Image from 'next/image';
import Footer from '@/components/layout/footer';
import AboutMe from '@/components/sections/about-me';
import Link from '@/components/general/link';

const BeyondBio = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        src="/images/ricardo-camilo-programador-frontend-web-developer-frontend-engineer-software-engineer-web-developer-vuejs-vue-reactjs-with-orange-cat.png"
        alt="Ricardo Camilo - Frontend Dev- With an orange cat named Hércules"
        width={928}
        height={1080}
        className="object-cover max-sm:h-[400px] shadow-xl rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-105"
      />

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
