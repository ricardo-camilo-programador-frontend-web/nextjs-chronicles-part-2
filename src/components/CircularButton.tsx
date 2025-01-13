import { useRef } from "react";

import type { FC } from 'react';
import { PropertyColors } from '@/types/PropertyColors';
import { twMerge } from 'tailwind-merge';
import { ArrowUpRight } from 'iconoir-react';

interface CircularButtonProps {
  id: string;
  color: PropertyColors;
  colorClass: PropertyColors;
}

export const CircularButton: FC<CircularButtonProps> = ({ id, color, colorClass }) => {
  return (
    <div
      id={id}
      className="relative w-[100px] h-[100px] group"
    >
      <div
        className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out"
        style={{ transformOrigin: 'center center' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full transform-gpu rotate-[-90deg] hidden group-hover:block rotate(360deg) group-hover:text-white animate-spin duration-1000 ease-in-out">
          <path
            id="textCircle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
            className={twMerge("stroke-none", color.borderColor)}
          />
          <text className="text-[13px] uppercase">
            <textPath href="#textCircle" startOffset="0%">
              See More • Click to visit the project •
            </textPath>
          </text>
        </svg>
      </div>

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
    </div>
  );
};
