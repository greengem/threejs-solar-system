// App.tsx
import { SelectedPlanetProvider } from './contexts/SelectedPlanetContext';
import SolarSystem from './components/SolarSystem';
function App() {
  return (
    <SelectedPlanetProvider>
      <div className='w-screen h-screen overflow-hidden'>
        <SolarSystem />
      </div>
    </SelectedPlanetProvider>
  );
}

export default App;
