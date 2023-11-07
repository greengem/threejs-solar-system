import React from 'react';

interface IntroTextProps {
  visible: boolean;
}

const IntroText: React.FC<IntroTextProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="
        text-secondary
        tracking-tight
        font-semibold
        text-7xl 
        absolute
        top-0 left-0 bottom-0 right-0
        flex
        justify-center
        items-center
    ">
        Welcome to the Solar System
    </div>

  );
};

export default IntroText;
