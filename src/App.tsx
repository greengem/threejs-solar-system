// App.tsx
import SolarSystem from './components/SolarSystem';
import { SelectedPlanetProvider } from './contexts/SelectedPlanetContext';
import { SpeedControlProvider } from './contexts/SpeedControlContext';
import { PlanetPositionsProvider } from './contexts/PlanetPositionsContext';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return (
    <NextUIProvider>
      <SelectedPlanetProvider>
        <SpeedControlProvider>
          <PlanetPositionsProvider>
            <div className='w-screen h-screen overflow-hidden'>
              <SolarSystem />
            </div>
          </PlanetPositionsProvider>
        </SpeedControlProvider>
      </SelectedPlanetProvider>
    </NextUIProvider>
  );
}

export default App;
