import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Typography from '@/components/general/typography';
import RippleEffect from '@/components/RippleEffect';

interface SkillProps {
  label: string;
  icon: StaticImageData | string;
  id: string;
  variant?: 'sm' | 'lg';
}

const Skill = ({ variant = 'sm', label, icon, id }: SkillProps) => {
  const rippleId = `ripple-${id}`

  return (
    <>
      <RippleEffect id={rippleId} />

      <div
        id={rippleId}
        className={'relative px-2 flex items-center gap-2 border border-zinc-200 rounded py-1 hover:bg-zinc-100 active:bg-zinc-200 overflow-hidden'}
      >
        <Image src={icon} alt={label} className="w-6 h-6" />
        <Typography variant={variant === 'sm' ? 'body2' : 'body1'}>
          {label}
        </Typography>
      </div>
    </>
  );
};

export default Skill;
