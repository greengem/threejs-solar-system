//PlanetPositionsContext.tsx
import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

type PlanetPositionsContextType = {
  planetPositions: { [key: string]: [number, number, number] };
  setPlanetPosition: (name: string, position: [number, number, number]) => void;
};

export const PlanetPositionsContext = createContext<PlanetPositionsContextType>({
  planetPositions: {},
  setPlanetPosition: () => {},
});

type PlanetPositionsProviderProps = {
  children: ReactNode;
};

export const PlanetPositionsProvider: React.FC<PlanetPositionsProviderProps> = ({ children }) => {
  const [planetPositions, setPlanetPositions] = useState<{ [key: string]: [number, number, number] }>({});

  const setPlanetPosition = useCallback((name: string, position: [number, number, number]) => {
    setPlanetPositions((prev) => ({ ...prev, [name]: position }));
  }, []);

  return (
    <PlanetPositionsContext.Provider value={{ planetPositions, setPlanetPosition }}>
      {children}
    </PlanetPositionsContext.Provider>
  );
};

export const usePlanetPositions = () => useContext(PlanetPositionsContext);
