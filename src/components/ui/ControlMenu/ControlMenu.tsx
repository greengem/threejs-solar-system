import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useCameraContext } from '../../../contexts/CameraContext';
import CameraHomeButton from "./CameraHomeButton";
import InfoButton from "./InfoButton";
import ExitViewButon from "./ExitViewButon";
import HelpButton from "./HelpButton";

const ControlMenu = () => {
    const { cameraState } = useCameraContext();
    const controls = useAnimation();

    useEffect(() => {
        if (cameraState === 'FREE') { 
            controls.start('visible');
        }
    }, [cameraState, controls]);

    const menuVariants = {
        hidden: { y: '-140%', opacity: 1 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <motion.div 
          className="
            absolute top-5 left-5
            p-2
            border-2
            border-secondary-100
            rounded-xl
            bg-black
          "
          variants={menuVariants}
          initial="hidden"
          animate={controls}
        >
            <div className="flex gap-x-2">
                <CameraHomeButton />
                <InfoButton />
                <HelpButton />
                <ExitViewButon />
            </div>
        </motion.div>
    );
}

export default ControlMenu;
