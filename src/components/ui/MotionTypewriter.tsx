'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface IMotionTypewriterProps {
  text: string;
}

const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

const MotionTypewriter: React.FC<IMotionTypewriterProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.p
      ref={ref}
      key={props.text}
      variants={sentenceVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {props.text.split('').map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default MotionTypewriter;
