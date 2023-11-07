import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroTextProps {
  visible: boolean;
}

const IntroText: React.FC<IntroTextProps> = ({ visible }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const fadeInTimeoutId = setTimeout(() => {
        setIsVisible(true); // Set isVisible to true after a 1-second delay
      }, 2000); // Wait for 1 second before fading in

      const fadeOutTimeoutId = setTimeout(() => {
        setIsVisible(false); // Hide the text after 3 seconds
      }, 5000); // Wait for 4 seconds before fading out

      return () => {
        clearTimeout(fadeInTimeoutId);
        clearTimeout(fadeOutTimeoutId);
      };
    } else {
      setIsVisible(false);
    }
  }, [visible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }} // 1 second duration for fading in and out
      className="
        absolute
        top-0 left-0 bottom-20 right-0
        flex
        flex-col
        justify-center
        items-center
      "
    >
      <h1 className='tracking-tight font-semibold text-2xl md:text-5xl lg:text-7xl xl:text-8xl'><span className='text-white'>Welcome to the </span><span className='from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b'>Solar System</span></h1>
      <p className='text-xs md:text-sm text-gray-300'>Developer Preview, this site is under construction and full of bugs!</p>
    </motion.div>
  );
};

export default IntroText;
