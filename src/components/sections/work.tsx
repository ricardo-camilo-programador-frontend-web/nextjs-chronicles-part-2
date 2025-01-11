import React from 'react';

import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/general/project-details';
import Typography from '@/components/general/typography';

const Work = () => {
  return (
    <section
      className="py-24 w-full flex justify-center max-md:py-16"
      id="work">
      <div className="flex flex-col gap-24 max-w-[952px] px-4 w-full">
        <div className="flex flex-col gap-2 max-lg:items-center">
          <Typography variant="h2" component="h2">
            Projetos em Destaque
          </Typography>
          <Typography variant="body1" className="max-lg:text-center">
            Conheça alguns dos meus trabalhos recentes, onde transformo ideias em experiências digitais que cativam e inspiram, utilizando tecnologias modernas e boas práticas para criar experiências digitais memoráveis.
          </Typography>
        </div>
        <div className="flex gap-20 flex-wrap max-lg:justify-center">
          {PROJECTS.map((project) => (
            <React.Fragment key={project.name}>
              <ProjectDetails
                name={project.name}
                description={project.description}
                isDescriptionOnLeft={project.isDescriptionOnLeft}
                image={project.previewImage}
                techs={project.techs}
                color={project.color}
                colorClass={project.colorClass}
                href={project.href}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
