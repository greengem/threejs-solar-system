// CameraHomeButton.tsx
import { useCameraContext } from '../../contexts/CameraContext';
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';
import { useSpeedControl } from '../../contexts/SpeedControlContext';
import { Button } from '@nextui-org/react';

const CameraHomeButton = () => {
  const { cameraState, setCameraState } = useCameraContext();
  const { restoreSpeedFactor } = useSpeedControl();
  const [selectedPlanet, setSelectedPlanet] = useSelectedPlanet();

  const moveToHome = () => {
    setCameraState('MOVING_TO_HOME');
    if(selectedPlanet) {
      setSelectedPlanet(null)
      restoreSpeedFactor();
    }
  };

  const isButtonDisabled = cameraState === 'INTRO_ANIMATION';

  return (
    <Button color='secondary' className='absolute right-5 top-20' isDisabled={isButtonDisabled} onClick={moveToHome}>
      Home
    </Button>
  );
};

export default CameraHomeButton;