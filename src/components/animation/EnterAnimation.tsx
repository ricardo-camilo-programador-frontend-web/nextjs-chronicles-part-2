'use client'

import { motion } from "motion/react"

interface EnterAnimationProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  duration?: number;
  visualDuration?: number;
  bounce?: number;
}

const EnterAnimation = ({ id, className, children, duration = 0.4, visualDuration = 0.4, bounce = 0.5 }: EnterAnimationProps) => {
  const rippleId = `ripple-${id}`

  return (
    <motion.div
      id={rippleId}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: duration,
        scale: { type: "spring", visualDuration: visualDuration, bounce: bounce },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default EnterAnimation;
