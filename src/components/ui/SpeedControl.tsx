// SpeedControl.tsx
import { useSpeedControl } from '../../contexts/SpeedControlContext';
import { useCameraContext } from '../../contexts/CameraContext';
import {Slider} from "@nextui-org/slider";

const SpeedControl = () => {
  const { speedFactor, setSpeedFactor } = useSpeedControl();
  const { cameraState } = useCameraContext();

  return (
    <div className='absolute top-5 right-5 w-64'>
      <Slider
          isDisabled={cameraState !== 'FREE'}
          aria-label="Speed control"
          step={0.01}
          maxValue={2}
          minValue={0}
          defaultValue={speedFactor}
          value={speedFactor}
          onChange={(value) => setSpeedFactor(Number(value))}
          color='secondary'
          size="lg"
      />
    </div>
  );
};

export default SpeedControl;
