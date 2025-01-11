import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import Typography from '@/components/general/typography';

type SkillProps = {
  variant?: 'sm' | 'md';
  label: string;
  icon: StaticImageData;
};

const Skill = ({ variant = 'sm', label, icon }: SkillProps) => {
  return (
    <div className={'px-2 flex items-center gap-2 border border-zinc-200 rounded py-1 hover:bg-zinc-100 active:bg-zinc-200'}>
      <Image src={icon} alt={label} className="w-6 h-6" />
      <Typography variant={variant === 'sm' ? 'body2' : 'body1'}>
        {label}
      </Typography>
    </div>
  );
};

export default Skill;
