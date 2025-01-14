import { Fragment } from 'react';
import { useTranslations } from 'next-intl';

import Client from '@/components/general/client';
import Typography from '@/components/general/typography';
import AvatarNoren from '@/public/images/avatar-noren.png';

const Testimonials = () => {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      name: t('testimonial1.name'),
      testimonial: t('testimonial1.testimonial'),
      avatar: AvatarNoren,
      company: t('testimonial1.company'),
    },
    {
      name: t('testimonial2.name'),
      testimonial: t('testimonial2.testimonial'),
      avatar: AvatarNoren,
      company: t('testimonial2.company'),
    },
    {
      name: t('testimonial3.name'),
      testimonial: t('testimonial3.testimonial'),
      avatar: AvatarNoren,
      company: t('testimonial3.company'),
    },
  ];

  return (
    <section
      className="w-full flex justify-center items-center flex-col py-24 px-4 gap-24 bg-zinc-50 max-md:py-16"
      id="testimonials">
      <Typography variant="h2" className="uppercase w-full flex justify-center">
        {t('title')}
      </Typography>
      <div className="flex gap-16 max-lg:flex-col">
        {testimonials.map((testimonial) => (
          <Fragment key={testimonial.name}>
            <Client
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              avatar={testimonial.avatar}
              company={testimonial.company}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
