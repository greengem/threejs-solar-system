// Providers.tsx
import { ReactNode } from 'react';
import { SelectedPlanetProvider } from './contexts/SelectedPlanetContext';
import { SpeedControlProvider } from './contexts/SpeedControlContext';
import { PlanetPositionsProvider } from './contexts/PlanetPositionsContext';
import { CameraProvider } from './contexts/CameraContext';
import { NextUIProvider } from "@nextui-org/react";

type ProvidersProps = {
    children: ReactNode;
  };

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <NextUIProvider>
      <SelectedPlanetProvider>
        <SpeedControlProvider>
          <PlanetPositionsProvider>
            <CameraProvider>
                {children}
            </CameraProvider>
          </PlanetPositionsProvider>
        </SpeedControlProvider>
      </SelectedPlanetProvider>
    </NextUIProvider>
  );
};

export default Providers;
