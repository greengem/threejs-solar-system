// SpeedControl.tsx
import { useSpeedControl } from '../../contexts/SpeedControlContext';
import { useCameraContext } from '../../contexts/CameraContext';
import {Slider} from "@nextui-org/slider";

const SpeedControl = () => {
  const { speedFactor, setSpeedFactor } = useSpeedControl();
  const { cameraState } = useCameraContext();

  return (
    <div className='absolute h-[300px] top-5 right-5'>
      <Slider
          isDisabled={cameraState === 'ZOOMING_IN' || cameraState === 'INTRO_ANIMATION' || cameraState === 'DETAIL_VIEW'}
          aria-label="Speed control"
          step={0.01}
          maxValue={5}
          minValue={0}
          defaultValue={speedFactor}
          value={speedFactor}
          onChange={(value) => setSpeedFactor(Number(value))}
          orientation="vertical"
          color='secondary'
          size="lg"
      />
    </div>
  );
};

export default SpeedControl;
