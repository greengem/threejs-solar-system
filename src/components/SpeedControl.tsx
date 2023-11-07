// SpeedControl.tsx
import { useSpeedControl } from '../contexts/SpeedControlContext';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext';
import {Slider} from "@nextui-org/slider";

const SpeedControl = () => {
  const { speedFactor, setSpeedFactorImmediate } = useSpeedControl(); // Use the new function here
  const [selectedPlanet] = useSelectedPlanet();

  return (
    <div className='absolute top-5 right-5 w-64'>
        <Slider
            // Disable slider when we are in detail mode
            isDisabled={selectedPlanet !== null}
            aria-label="Speed control"
            step={0.01}
            maxValue={2}
            minValue={0}
            defaultValue={speedFactor}
            value={speedFactor}
            onChange={(value) => setSpeedFactorImmediate(Number(value))} // Update this line
            color='secondary'
            size="lg"
        />
    </div>
  );
};

export default SpeedControl;