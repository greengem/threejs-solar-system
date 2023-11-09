import { useState, useEffect } from 'react';
import { Progress } from '@nextui-org/react'; // Ensure this import is correct
import { motion } from 'framer-motion';

const containerVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0 },
};

const LoadingScreen = () => {
  // State to keep track of the loading progress
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 10;
        if (newValue > 100) {
          clearInterval(interval);
          return 100;
        }
        return newValue;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center w-screen h-screen"
    >
      <Progress
        aria-label="Loading..."
        size="lg"
        value={value}
        color="secondary"
        className="max-w-md"
      />
      <p>Loading... {value}%</p>
    </motion.div>
  );
};

export default LoadingScreen;
