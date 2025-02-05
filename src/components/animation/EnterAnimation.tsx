'use client'

import { motion } from "motion/react"

interface EnterAnimationProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  duration?: number;
  visualDuration?: number;
}

const EnterAnimation = ({ id, className, children, duration = 0.4, visualDuration = 0.4 }: EnterAnimationProps) => {
  const rippleId = `ripple-${id}`

  return (
    <motion.div
      id={rippleId}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: duration,
        scale: { type: "spring", visualDuration: visualDuration, bounce: 0.5 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default EnterAnimation;
