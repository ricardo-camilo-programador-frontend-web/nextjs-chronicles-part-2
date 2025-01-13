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
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    buttonRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    if (textRef.current) {
      textRef.current.style.transform = `rotate(0deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0, 0)';
    if (textRef.current) {
      textRef.current.style.transform = `rotate(360deg)`;
    }
  };

  return (
    <div
      id={id}
      className="relative w-[100px] h-[100px] group"
    >
      <div
        ref={textRef}
        className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transformOrigin: 'center center' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg] hidden group-hover:block">
          <path
            id="textCircle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
            className={twMerge("stroke-none", color.borderColor)}
          />
          <text className="text-[13px] uppercase">
            <textPath href="#textCircle" startOffset="0%">
              Click to visit • Click to visit •
            </textPath>
          </text>
        </svg>
      </div>

      <div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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
