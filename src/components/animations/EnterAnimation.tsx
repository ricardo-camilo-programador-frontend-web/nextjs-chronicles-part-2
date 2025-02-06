'use client'

import { motion } from "motion/react"

interface EnterAnimationProps {
  className?: string;
  children: React.ReactNode;
  duration?: number;
  visualDuration?: number;
  bounce?: number;
  grabEnabled?: boolean;
  hoverEnabled?: boolean;
}

const EnterAnimation = ({
  className = "w-full",
  children,
  duration = 0.4,
  visualDuration = 0.4,
  bounce = 0.5,
  grabEnabled = true,
  hoverEnabled = false,
}: EnterAnimationProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={hoverEnabled ? { scale: 1.6 } : undefined}
      whileTap={grabEnabled ? { scale: 0.95 } : undefined}
      drag={grabEnabled}
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }}
      dragElastic={0.6}
      transition={{
        duration: duration,
        scale: { type: "spring", visualDuration: visualDuration, bounce: bounce },
      }}
      className={className}
      style={grabEnabled ? {
        cursor: 'grab',
        touchAction: 'none'
      } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default EnterAnimation;
