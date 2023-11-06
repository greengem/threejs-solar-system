// SpeedControlContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SpeedControlContextType {
  speedFactor: number;
  setSpeedFactor: React.Dispatch<React.SetStateAction<number>>;
}

const SpeedControlContext = createContext<SpeedControlContextType | undefined>(undefined);

export const useSpeedControl = () => {
  const context = useContext(SpeedControlContext);
  if (!context) {
    throw new Error('useSpeedControl must be used within a SpeedControlProvider');
  }
  return context;
};

interface SpeedControlProviderProps {
  children: ReactNode;
}

export const SpeedControlProvider: React.FC<SpeedControlProviderProps> = ({ children }) => {
  const [speedFactor, setSpeedFactor] = useState(1);

  return (
    <SpeedControlContext.Provider value={{ speedFactor, setSpeedFactor }}>
      {children}
    </SpeedControlContext.Provider>
  );
};
