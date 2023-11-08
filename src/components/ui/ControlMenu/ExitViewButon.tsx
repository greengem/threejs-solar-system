// ExitViewButton.tsx
import { useSelectedPlanet } from '../../../contexts/SelectedPlanetContext';
import { useSpeedControl } from '../../../contexts/SpeedControlContext';
import { useCameraContext } from '../../../contexts/CameraContext';
import { Button } from '@nextui-org/button';
import { IconX } from '@tabler/icons-react';

const ExitViewButton: React.FC = () => {
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
    <Button color='danger' variant='flat' onClick={handleExitDetailMode}>
      <IconX />Exit Detail View
    </Button>
  );
};

export default ExitViewButton;
