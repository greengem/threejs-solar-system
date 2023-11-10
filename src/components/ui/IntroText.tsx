import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroText: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const fadeInTimeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const fadeOutTimeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    const hideTimeoutId = setTimeout(() => {
      setDisplay(false);
    }, 9200);

    return () => {
      clearTimeout(fadeInTimeoutId);
      clearTimeout(fadeOutTimeoutId);
      clearTimeout(hideTimeoutId);
    };
  }, []);

  if (!display) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="
        absolute
        top-0 left-0 bottom-0 right-0
        flex
        flex-col
        justify-center
        items-center
        opacity-95
      "
    >
      <h1 className='tracking-tight font-semibold text-2xl md:text-5xl lg:text-7xl xl:text-8xl'>
        <span className='text-white'>Welcome to the </span>
        <span className='from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b'>
          Solar System
        </span>
      </h1>
    </motion.div>
  );
};

export default IntroText;
