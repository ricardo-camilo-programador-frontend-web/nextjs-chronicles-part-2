import { Fragment } from 'react';
import { useTranslations } from 'next-intl';

import ProjectDetails from '@/components/general/project-details';
import Typography from '@/components/general/typography';

import IllustrationBreathNatural from '@/public/images/breath-natural.webp';
import IllustrationFoodHut from '@/public/images/food-hut.webp';
import IllustrationSavana from '@/public/images/savana.webp';
const Work = () => {
  const t = useTranslations('work');

  const projects = [
    {
      name: t('projects.breathNatural.name'),
      description: t('projects.breathNatural.description'),
      seeMore: t('projects.breathNatural.seeMore'),
      techs: t('projects.breathNatural.techs').split(','),
      previewImage: IllustrationBreathNatural,
      color: {
        bgColor: t('projects.breathNatural.color.bgColor'),
        borderColor: t('projects.breathNatural.color.borderColor'),
      },
      colorClass: {
        bgColor: t('projects.breathNatural.colorClass.bgColor'),
        borderColor: t('projects.breathNatural.colorClass.borderColor'),
      },
      isDescriptionOnLeft: false,
      href: t('projects.breathNatural.href'),
    },
    {
      name: t('projects.foodHut.name'),
      description: t('projects.foodHut.description'),
      seeMore: t('projects.foodHut.seeMore'),
      techs: t('projects.foodHut.techs').split(','),
      previewImage: IllustrationFoodHut,
      color: {
        bgColor: t('projects.foodHut.color.bgColor'),
        borderColor: t('projects.foodHut.color.borderColor'),
      },
      colorClass: {
        bgColor: t('projects.foodHut.colorClass.bgColor'),
        borderColor: t('projects.foodHut.colorClass.borderColor'),
      },
      isDescriptionOnLeft: false,
      href: t('projects.foodHut.href'),
    },
    {
      name: t('projects.savana.name'),
      description: t('projects.savana.description'),
      seeMore: t('projects.savana.seeMore'),
      techs: t('projects.savana.techs').split(','),
      previewImage: IllustrationSavana,
      color: {
        bgColor: t('projects.savana.color.bgColor'),
        borderColor: t('projects.savana.color.borderColor'),
      },
      colorClass: {
        bgColor: t('projects.savana.colorClass.bgColor'),
        borderColor: t('projects.savana.colorClass.borderColor'),
      },
      isDescriptionOnLeft: false,
      href: t('projects.savana.href'),
    },
  ];

  return (
    <section
      className="py-24 w-full flex justify-center max-md:py-16"
      id="work">
      <div className="flex flex-col gap-24 max-w-[952px] px-4 w-full">
        <div className="flex flex-col gap-2 max-lg:items-center">
          <Typography variant="h2" component="h2">
            {t('title')}
          </Typography>
          <Typography variant="body1" className="max-lg:text-center">
            {t('description')}
          </Typography>
        </div>
        <div className="flex gap-20 flex-wrap max-lg:justify-center">
          {projects.map((project, index) => (
            <Fragment key={project.name}>
              <ProjectDetails
                id={project.name + index}
                name={project.name}
                description={project.description}
                isDescriptionOnLeft={project.isDescriptionOnLeft}
                image={project.previewImage}
                techs={project.techs}
                color={project.color}
                colorClass={project.colorClass}
                href={project.href}
                seeMore={project.seeMore}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
