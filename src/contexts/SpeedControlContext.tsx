import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SpeedControlContextType {
  speedFactor: number;
  setSpeedFactor: (value: number) => void;
  setSpeedFactorImmediate: (value: number) => void;
  overrideSpeedFactor: () => void;
  restoreSpeedFactor: () => void;
  isInDetailView: boolean;
  setInDetailView: (value: boolean) => void;
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
  const [speedFactor, setSpeedFactorState] = useState(1);
  const [lastSpeedFactor, setLastSpeedFactor] = useState(1);
  const [isInDetailView, setInDetailView] = useState(false);

  // Function to smoothly change speed factor over time
  const changeSpeedFactorOverTime = (start: number, end: number, duration: number) => {
    const step = (end - start) / duration * 10;
    let currentSpeed = start;

    const intervalId = setInterval(() => {
      if ((step > 0 && currentSpeed >= end) || (step < 0 && currentSpeed <= end)) {
        clearInterval(intervalId);
        setSpeedFactorState(end); // Ensure we end exactly at the end value
      } else {
        currentSpeed += step;
        setSpeedFactorState(currentSpeed);
      }
    }, 10);
  };

  const setSpeedFactor = (value: number) => {
    setLastSpeedFactor(speedFactor); // Remember the last speed before change
    changeSpeedFactorOverTime(speedFactor, value, 3000);
  };

  const overrideSpeedFactor = () => {
    if (!isInDetailView) {
      setLastSpeedFactor(speedFactor); // Remember the current speed
      changeSpeedFactorOverTime(speedFactor, 0, 3000);
      setInDetailView(true); // We are now in detail view
    }
  };

  const restoreSpeedFactor = () => {
    changeSpeedFactorOverTime(speedFactor, lastSpeedFactor, 1000);
    setInDetailView(false); // No longer in detail view
  };

  const setSpeedFactorImmediate = (value: number) => {
    setSpeedFactorState(value); // Change the speed immediately
  };

  return (
    <SpeedControlContext.Provider value={{ speedFactor, setSpeedFactor, setSpeedFactorImmediate, overrideSpeedFactor, restoreSpeedFactor, isInDetailView, setInDetailView }}>
      {children}
    </SpeedControlContext.Provider>
  );
};
