'use client'

import { FC } from "react"
import { motion } from "motion/react"
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, className = "w-full", direction = "left" }) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : 100,
        scale: 0.2
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        opacity: { duration: 0.5 },
        scale: { duration: 0.6 }
      }}
    >
      {children}
    </motion.div>
  );
} 

export default ScrollReveal