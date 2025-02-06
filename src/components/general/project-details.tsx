'use client';

import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';
import { SKILLS } from '@/lib/data';
import Typography from '@/components/general/typography';
import Skill from '@/components/general/skill';
import { PropertyColors } from '@/types/PropertyColors';
import { CircularButton } from '@/components/CircularButton';
import { ArrowRightIcon, ArrowUpRight } from 'lucide-react';
import { Videos } from '@/types/Videos';
import Link from "@/components/general/link";
import VideoPlayer from '../VideoPlayer';
import EnterAnimation from '@/components/animations/EnterAnimation';

interface ProjectDetailsProps {
  id: string;
  name: string;
  video: string;
  description: string;
  techs?: string[];
  isDescriptionOnLeft: boolean;
  image: StaticImageData;
  color: PropertyColors;
  colorClass: PropertyColors;
  href: string;
  seeMore: string;
  children?: ReactNode;
}

interface ShapeProps {
  bgColor: string | undefined;
  borderColor: string | undefined;
  children?: ReactNode;
  href: string;
  className?: string;
}

interface Skill {
  label: string;
  icon: StaticImageData | string;
}

const Shape: FC<ShapeProps> = ({
  bgColor,
  borderColor,
  children,
  className
}) => {
  return (
    <div className={twMerge("relative w-[418px] h-[298px] rounded-lg group shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out", className)}>
      <div className="absolute -top-6 -right-4 overflow-hidden h-24 w-24 bg-white z-[2] rounded-full" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        className="absolute z-10">
        <defs>
          <path
            id="motionPath"
            d="M327.134 0c6.308 0 10.359 7.185 8.773 13.29a47.05 47.05 0 0 0-1.509 11.857c0 25.957 21.043 47 47 47 6.671 0 13.016-1.39 18.763-3.895C407.079 65.237 418 69.747 418 77.293V290a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h319.134Z"
          />
        </defs>

        <mask id={bgColor} fill="#fff" className="z-[3]">
          <use href="#motionPath" />
        </mask>

        <path
          className="z-[3]"
          fillRule="evenodd"
          d="M327.134 0c6.308 0 10.359 7.185 8.773 13.29a47.05 47.05 0 0 0-1.509 11.857c0 25.957 21.043 47 47 47 6.671 0 13.016-1.39 18.763-3.895C407.079 65.237 418 69.747 418 77.293V290a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h319.134Z"
          clipRule="evenodd"
        />

        <path
          className="z-[3]"
          fill={borderColor}
          d="m400.161 68.252-.799-1.833.799 1.833Zm-64.254-54.961-1.936-.504 1.936.503Zm.491 11.856c0-3.925.502-7.729 1.444-11.353l-3.871-1.007a49.064 49.064 0 0 0-1.573 12.36h4Zm45 45c-24.852 0-45-20.148-45-45h-4c0 27.062 21.938 49 49 49v-4Zm17.964-3.728a44.843 44.843 0 0 1-17.964 3.728v4a48.845 48.845 0 0 0 19.563-4.062l-1.599-3.666ZM416 77.293V290h4V77.293h-4ZM410 296H8v4h402v-4ZM2 290V8h-4v282h4ZM8 2h319.134v-4H8v4Zm0 294a6 6 0 0 1-6-6h-4c0 5.523 4.477 10 10 10v-4Zm408-6a6 6 0 0 1-6 6v4c5.523 0 10-4.477 10-10h-4ZM400.961 70.085c2.818-1.228 6.666-.97 9.861.536 3.209 1.512 5.178 3.97 5.178 6.672h4c0-4.843-3.492-8.414-7.473-10.29-3.995-1.882-9.066-2.371-13.165-.584l1.599 3.666ZM2 8a6 6 0 0 1 6-6v-4C2.477-2-2 2.477-2 8h4Zm335.842 5.794c.941-3.62.209-7.505-1.666-10.5C334.289.282 331.119-2 327.134-2v4c2.323 0 4.332 1.31 5.652 3.417 1.33 2.125 1.831 4.885 1.185 7.37l3.871 1.007Z"
          mask={`url(#${bgColor})`}
        />

        <circle
          r="4"
          fill={borderColor}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M327.134 0c6.308 0 10.359 7.185 8.773 13.29a47.05 47.05 0 0 0-1.509 11.857c0 25.957 21.043 47 47 47 6.671 0 13.016-1.39 18.763-3.895C407.079 65.237 418 69.747 418 77.293V290a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h319.134Z"
          />
        </circle>
      </svg>

      <div className="bg-white absolute h-6 w-6 right-[3.7rem] -top-[0.7rem] rounded-full z-[3]"></div>

      <div className="bg-white absolute h-6 w-6 -right-[1rem] top-[3rem] rounded-full z-[3]"></div>

      <div className="absolute inset-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const ProjectDetails: FC<ProjectDetailsProps> = ({
  id,
  name,
  video,
  description,
  techs,
  image,
  color,
  colorClass,
  href,
  seeMore,
}: ProjectDetailsProps) => {
  const [filteredTechs, setFilteredTechs] = useState<Skill[]>([]);
  const [currentVideo, setCurrentVideo] = useState<Videos>({
    id: id,
    name: name,
    link: video,
  });

  const handleVideoClick = (video: string) => {
    setCurrentVideo({
      id: id,
      name: name,
      link: video,
    });
  };

  const renderTechs = () => {
    const filteredTechsLocal = SKILLS.filter((skill) =>
      techs?.includes(skill.label)
    ) as Skill[];
    setFilteredTechs(filteredTechsLocal);
  };

  useEffect(() => {
    renderTechs();
  }, [video, techs]);

  return (
    <div
      className="flex flex-col gap-6 max-w-[420px] max-lg:max-w-xl w-full group"
      onMouseEnter={() => handleVideoClick(video)}
      onMouseLeave={() => setCurrentVideo({
        id: id,
        name: name,
        link: '',
      })}
    >
      <div className="w-full h-[298px] rounded-lg relative flex justify-center max-lg:hidden">
        <Shape
          bgColor={color.bgColor}
          borderColor={color.borderColor}
          href={href}
        >
          <Image
            src={image}
            alt={`${name} project screenshot`}
            className="object-scale-down object-center w-full h-full group-hover:hidden"
            style={{
              backgroundColor: `${color.bgColor}20`,
            }}
            priority
          />

          {currentVideo.link && (
            <div className="absolute inset-0 z-30">
              <VideoPlayer
                className="rounded-xl w-full h-full hidden group-hover:block mt-0"
                src={currentVideo.link}
                params={{
                  controls: "1",
                  autoplay: "1",
                  loop: "1",
                  muted: "1",
                }}
                title={currentVideo.name}
              />
            </div>
          )}
        </Shape>

        <Link href={href}
          className={twMerge(
            'w-[70px] h-[70px] rounded-full flex items-center justify-center absolute -top-2.5 right-0.5 border-2 z-40 bg-white',
            colorClass.bgColor,
            colorClass.borderColor
          )}
          rel="noopener noreferrer"
          title={seeMore}
        >
          <CircularButton
            id={id}
            color={color}
            className="group bg-white rounded-full h-16 w-16"
          >
            <div
              className={twMerge(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                'w-[70px] h-[70px] rounded-full flex items-center justify-center border-2',
                'transition-transform duration-200 ease-out z-10',
                colorClass.bgColor,
                colorClass.borderColor
              )}
            >
              <div className="group-hover:scale-110 transform transition">
                <ArrowUpRight color={color.borderColor} strokeWidth={2.5} />
              </div>
            </div>
          </CircularButton>
        </Link>
      </div>

      <div
        className={twMerge(
          'w-full h-[298px] rounded-lg border justify-center hidden max-lg:flex',
          colorClass.borderColor,
          colorClass.bgColor
        )}>
        <Image src={image} alt="" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center h-10 border-b mb-2">
            <Typography variant="h3" component="h3">
              {name}
            </Typography>
          </div>
          <div className="flex flex-col gap-1 md:min-h-[8rem]">
            <Typography variant="body1">{description}</Typography>
          </div>
        </div>

        <div className={twMerge('flex justify-end w-full items-center gap-2 text-sm group-hover:underline text-[${color.bgColor}]')}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {seeMore}
          </a>
          <ArrowRightIcon
            className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-2`}
          />
        </div>

        <div className="flex gap-2 flex-wrap sm:flex-nowrap items-center justify-start">
          {filteredTechs.map((tech: Skill) => (
            <EnterAnimation
              key={tech.label}
              className="w-auto"
            >
              <Skill
                label={tech.label}
                icon={tech.icon}
                variant="sm"
                id={`skill-${id}-${tech.label}`}
              />
            </EnterAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
