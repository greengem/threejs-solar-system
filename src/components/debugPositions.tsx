import { useContext } from 'react';
import { PlanetPositionsContext } from '../contexts/PlanetPositionsContext';

const DebugPlanetPositions = () => {
  const { planetPositions } = useContext(PlanetPositionsContext);

  return (
    <div className='absolute top-0 left-0 text-white'>
      <pre>{JSON.stringify(planetPositions, null, 2)}</pre>
    </div>
  );
};

export default DebugPlanetPositions;
