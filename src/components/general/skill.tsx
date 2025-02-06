import type { FC } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Typography from '@/components/general/typography';
import EnterAnimation from '@/components/animations/EnterAnimation';
import RippleEffect from '@/components/animations/RippleEffect';

interface SkillProps {
  label: string;
  icon: StaticImageData | string;
  id: string;
  variant?: 'sm' | 'lg';
}

const Skill: FC<SkillProps> = ({ variant = 'sm', label, icon, id }) => {
  const rippleId = `ripple-${id}`
  const randomFromZeroToNinetnine = Math.floor(Math.random() * 10)

  return (
    <EnterAnimation
      duration={0.4 + randomFromZeroToNinetnine * 0.1}
      visualDuration={0.4 + randomFromZeroToNinetnine * 0.2}
      className="w-auto"
    >
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
