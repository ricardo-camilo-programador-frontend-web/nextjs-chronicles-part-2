import type { FC } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Typography from '@/components/general/typography';
import EnterAnimation from '@/components/animation/EnterAnimation';
import RippleEffect from '@/components/animation/RippleEffect';

interface SkillProps {
  label: string;
  icon: StaticImageData | string;
  id: string;
  variant?: 'sm' | 'lg';
}

const Skill: FC<SkillProps> = ({ variant = 'sm', label, icon, id }) => {
  const rippleId = `ripple-${id}`

  return (
    <EnterAnimation id={`skill-${id}-${rippleId}-enter-${icon}`}>
      <RippleEffect id={rippleId} />

      <div
        id={rippleId}
        className={'relative px-2 flex items-center gap-2 border border-zinc-200 rounded py-1 overflow-hidden shadow-xs transition-all duration-300 ease-in-out hover:z-10 hover:border-primary'}
        title={label}
        aria-label={label}
      >
        <Image src={icon} alt={label} className="w-6 h-6" />
        <Typography variant={variant === 'sm' ? 'body2' : 'body1'}>
          {label}
        </Typography>
      </div>
    </EnterAnimation>
  );
};

export default Skill;
