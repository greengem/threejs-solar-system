import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroText: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [display, setDisplay] = useState(true); // New state to control display

  useEffect(() => {
    // Set a timeout to fade in the text
    const fadeInTimeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 4000); // Fade in after 4 seconds

    // Set another timeout to fade out the text after a certain time
    const fadeOutTimeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 14000); // Fade out after 10 seconds (total 14 seconds from the initial render)

    // Set a timeout to hide the text after the fade out
    const hideTimeoutId = setTimeout(() => {
      setDisplay(false); // Hide the text by not rendering the component
    }, 14000); // Hide after 1 second of fade out animation

    return () => {
      // Clear timeouts if the component unmounts
      clearTimeout(fadeInTimeoutId);
      clearTimeout(fadeOutTimeoutId);
      clearTimeout(hideTimeoutId);
    };
  }, []);

  if (!display) {
    return null; // Don't render the component if display is false
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }} // Duration for the fade in/out transition
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
