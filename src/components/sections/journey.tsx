import { Fragment } from 'react';
import { useTranslations } from 'next-intl';

import Typography from "@/components/general/typography";
import Skill from "@/components/general/skill";
import { SKILLS } from "@/lib/data";

const Journey = () => {
  const t = useTranslations('journey');
  const skills = SKILLS.filter((skill) => skill.label !== "Redux");

  return (
    <section className="bg-zinc-50 w-full flex justify-center" id="journey">
      <div className="flex max-w-3xl py-24 px-4 flex-col gap-12 justify-center items-center max-md:py-16">
        <Typography variant="h2" className="uppercase w-full flex justify-center">
          {t('title')}
        </Typography>
        <div className="flex flex-col gap-8">
          <Typography variant="body1">
            {t('description')}
            <br />
            <br />
            {t('approach')}
          </Typography>
          <div className="flex flex-col gap-4">
            {t('technologies')}:
            <div className="flex gap-3 flex-wrap">
              {skills.map((skill) => (
                <Fragment key={skill.label}>
                  <Skill
                    icon={skill.icon}
                    label={skill.label}
                    variant="sm"
                    id={`skill-${skill.label}-${skill.icon}`}
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <Typography variant="body1">
            <span className="font-semibold text-zinc-900">
              {t('funFact.label')}&nbsp;
            </span>
            {t('funFact.description')}
            <br />
            <br />
            {t('conclusion')}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Journey;
