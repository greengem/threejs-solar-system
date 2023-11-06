//PlanetPositionsContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';
import { Vector3 } from 'three';

type PlanetPositionsState = {
  [planetName: string]: Vector3;
};

type PlanetPositionsContextType = {
  planetPositions: PlanetPositionsState;
  setPlanetPositions: React.Dispatch<React.SetStateAction<PlanetPositionsState>>;
};

const PlanetPositionsContext = createContext<PlanetPositionsContextType | undefined>(undefined);

export const usePlanetPositions = () => {
  const context = useContext(PlanetPositionsContext);
  if (!context) {
    throw new Error('usePlanetPositions must be used within a PlanetPositionsProvider');
  }
  return context;
};

interface PlanetPositionsProviderProps {
  children: ReactNode;
}

export const PlanetPositionsProvider: React.FC<PlanetPositionsProviderProps> = ({ children }) => {
  const [planetPositions, setPlanetPositions] = useState<PlanetPositionsState>({});

  return (
    <PlanetPositionsContext.Provider value={{ planetPositions, setPlanetPositions }}>
      {children}
    </PlanetPositionsContext.Provider>
  );
};
