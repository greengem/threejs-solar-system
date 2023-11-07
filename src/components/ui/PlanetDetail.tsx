// PlanetDetail.tsx
import { Button } from '@nextui-org/button';
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';
import { useSpeedControl } from '../../contexts/SpeedControlContext';
import { useCameraContext } from '../../contexts/CameraContext';

const PlanetDetail: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useSelectedPlanet();
  const { restoreSpeedFactor } = useSpeedControl();
  const { setCameraState } = useCameraContext();

  const handleExitDetailMode = () => {
    setSelectedPlanet(null);
    restoreSpeedFactor();
    setCameraState('MOVING_TO_HOME');
  };

  if (!selectedPlanet) return null;

  return (
    <div className='absolute top-5 left-5 w-[400px]'>
      <h1 className='mb-0 tracking-tight font-semibold text-2xl md:text-5xl lg:text-7xl xl:text-8xl text-white'>
        {selectedPlanet.name}
      </h1>
      <p className='text-gray-300 mb-2'>{selectedPlanet.description}</p>
        <Button color='danger' onClick={handleExitDetailMode}>
          Exit Detail View
        </Button>
    </div>
  );
};

export default PlanetDetail;
