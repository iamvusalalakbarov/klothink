'use client';

import { motion, useScroll, useSpring } from 'motion/react';

const MotionScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
      }}
      className="fixed left-0 right-0 top-0 z-50 h-1.5 origin-left bg-primary-50"
    />
  );
};

export default MotionScrollProgress;
