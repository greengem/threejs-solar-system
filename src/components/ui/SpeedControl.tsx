import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSpeedControl } from '../../contexts/SpeedControlContext';
import { useCameraContext } from '../../contexts/CameraContext';
import { Slider } from "@nextui-org/slider";

const SpeedControl = () => {
  const controls = useAnimation();
  const { speedFactor, setSpeedFactor } = useSpeedControl();
  const { cameraState } = useCameraContext();

  useEffect(() => {
    if (cameraState === 'FREE') {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [cameraState, controls]);

  const speedControlVariants = {
    hidden: { x: '150%', opacity: 1 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div
      className='fixed top-5 right-5'
      variants={speedControlVariants}
      initial="hidden"
      animate={controls}
    >
      <Slider
          isDisabled={cameraState === 'ZOOMING_IN' || cameraState === 'DETAIL_VIEW'}
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
          className='h-[300px]'
      />
    </motion.div>
  );
};

export default SpeedControl;
