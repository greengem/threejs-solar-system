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
    <div className='absolute left-5 right-5 top-5 w-[400px]'>
        <h1 className='
          text-white
          mb-5 
          tracking-tight font-semibold 
          text-5xl lg:text-7xl xl:text-8xl 
        '>
          {selectedPlanet.name}
        </h1>
        <p className='
          hidden md:block
          text-white 
          mb-5 ml-1
          text-xs md:text-sm
        '>
          {selectedPlanet.description}
        </p>
        <Button size='sm' className='ml-1 hidden md:block' color='secondary' onClick={handleExitDetailMode}>
          Exit Detail View
        </Button>
    </div>
  );
};

export default PlanetDetail;
