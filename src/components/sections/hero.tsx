import Image from 'next/image';
import { useTranslations } from 'next-intl';

import RippleEffect from '@/components/animations/RippleEffect';
import Typography from '@/components/general/typography';
import Social from '@/components/general/social';
import { StarRating } from '@/components/StarRating';
import Ricardo from '@/public/images/ricardo-camilo-programador-frontend-web-developer-frontend-engineer-software-engineer-web-developer-vuejs-vue-reactjs-react-javascript-typescript.png';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section
      className="w-full pb-24 pt-16 flex justify-center max-lg:py-16 max-lg:pt-0"
    >
      <div className="w-full max-w-[1120px] px-8 flex justify-between items-center max-lg:max-full max-lg:flex-col max-lg:p-4 max-lg:pt-0 max-xl:w-full gap-8">
        <div className="flex flex-col gap-12 max-lg:order-1 max-w-prose">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <StarRating rating={5} /> |
                <Typography variant="body1" className="text-xs">
                  {t('experience')}
                </Typography>
              </div>
              <Typography
                variant="h1"
                className="uppercase bg-gradient-to-r from-primary to-[#39757c] bg-[length:100%_14px] bg-no-repeat bg-bottom w-fit">
                RICARDO CAMILO
              </Typography>
            </div>
            <div className="flex gap-1 flex-col max-w-2xl">
              <Typography variant="body1" className="font-medium">
                {t('specialization')}
              </Typography>
              <Typography variant="body1" className="font-medium">
                {t('tagline')}
              </Typography>
            </div>
          </div>

          <div className="flex justify-start">
            <Social variant="light" />
          </div>
        </div>

        <RippleEffect id="hero-ricardo-camilo" />
  
        <div
          id="hero-ricardo-camilo"
          className="overflow-hidden rounded-[168px] rounded-bl max-lg:order-0 max-lg:rounded-[40px] max-lg:rounded-bl max-h-[450px] max-md:max-h-auto"
        >
          <Image
            src={Ricardo}
            alt="Ricardo Camilo - Programador Frontend Web Developer"
            title="Ricardo Camilo - Programador Frontend Web Developer"
            width={400}
            className="object-cover relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
