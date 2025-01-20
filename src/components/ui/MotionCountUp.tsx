'use client';

import React, { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'motion/react';

interface IMotionCountUpProps {
  count: number;
}

const MotionCountUp: React.FC<IMotionCountUpProps> = (props) => {
  const value = useMotionValue(0);
  const rounded = useTransform(() => Math.round(value.get()));

  useEffect(() => {
    const controls = animate(value, props.count, { duration: 3 });

    return () => controls.stop();
  }, []);

  return <motion.span>{rounded}</motion.span>;
};

export default MotionCountUp;
