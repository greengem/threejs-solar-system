// SelectedPlanetContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PlanetData } from '../../types';

const SelectedPlanetContext = createContext<[PlanetData | null, (planet: PlanetData | null) => void]>([null, () => {}]);

export const useSelectedPlanet = () => {
  return useContext(SelectedPlanetContext);
};

interface SelectedPlanetProviderProps {
  children: ReactNode;
}

export const SelectedPlanetProvider: React.FC<SelectedPlanetProviderProps> = ({ children }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  return (
    <SelectedPlanetContext.Provider value={[selectedPlanet, setSelectedPlanet]}>
      {children}
    </SelectedPlanetContext.Provider>
  );
};
