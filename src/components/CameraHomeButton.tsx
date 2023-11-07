// CameraHomeButton.tsx
import { useCameraContext } from '../contexts/CameraContext';
import { Button } from '@nextui-org/react';

const CameraHomeButton = () => {
  const { cameraState, setCameraState } = useCameraContext();

  const moveToHome = () => {
    setCameraState('MOVING_TO_HOME');
  };

  const isDisabled = cameraState !== 'FREE';

  return (
    <Button className='absolute left-5 top-20' disabled={isDisabled} onClick={moveToHome}>
      Home
    </Button>
  );
};

export default CameraHomeButton;
