import type { FC, ReactNode } from 'react';
import { PropertyColors } from '@/types/PropertyColors';
import { twMerge } from 'tailwind-merge';
import { ArrowUpRight } from 'iconoir-react';

interface CircularButtonProps {
  id: string;
  color: PropertyColors;
  colorClass: PropertyColors;
  className?: string;
  children?: ReactNode;
  message?: string;
}

export const CircularButton: FC<CircularButtonProps> = ({ id, color, className, colorClass, children, message = 'See More • Click to visit the project •' }) => {
  return (
    <div
      id={id}
      className={twMerge("relative w-[100px] h-[100px] flex items-center justify-center", className)}
    >
      <div
        className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100"
        style={{ transformOrigin: 'center center' }}
      >
        <svg viewBox="0 0 100 100" className="w-full transition-all duration-1000 ease-in-out h-full animate-spin">
          <path
            id="textCircle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
            className={twMerge("stroke-none", color.borderColor)}
          />
          <text className="text-[13px] uppercase">
            <textPath href="#textCircle" startOffset="0%">
              {message}
            </textPath>
          </text>
        </svg>
      </div>

      {children}
    </div>
  );
};
