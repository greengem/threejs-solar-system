// App.tsx
import SolarSystem from './components/SolarSystem';
import Providers from './Providers';

function App() {
  return (
    <Providers>
      <div className='w-screen h-screen overflow-hidden'>
        <SolarSystem />
      </div>
    </Providers>
  );
}

export default App;
