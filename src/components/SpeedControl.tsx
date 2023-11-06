// SpeedControl.tsx
import { useSpeedControl } from '../contexts/SpeedControlContext';
import {Slider} from "@nextui-org/slider";

const SpeedControl = () => {
  const { speedFactor, setSpeedFactor } = useSpeedControl();

  return (
    <div className='absolute top-5 right-5 w-64'>
        <Slider
            aria-label="Speed control"
            step={0.01}
            maxValue={5}
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
