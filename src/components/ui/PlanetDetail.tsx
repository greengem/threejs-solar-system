import { motion, AnimatePresence } from 'framer-motion';
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';

const PlanetDetail: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [selectedPlanet] = useSelectedPlanet();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };
  
  return (
    <AnimatePresence>
      {visible && selectedPlanet && (
        <motion.div
          className='absolute left-5 right-5 top-20 mt-4 w-[400px]'
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}

        >
          <h1 className='
            text-white
            mb-5 
            tracking-tight font-semibold 
            text-7xl lg:text-8xl xl:text-8xl 
            opacity-90
          '>
            {selectedPlanet.name}
          </h1>
          <p className='text-secondary'>Debug Info...</p>
          <ul className='text-sm'>
            <li>Position: {selectedPlanet.position}</li>
            <li>Radius: {selectedPlanet.radius}</li>
            <li>Rotation Speed: {selectedPlanet.rotationSpeed}</li>
            <li>Tilt: {selectedPlanet.tilt}</li>
            <li>Orbit Speed: {selectedPlanet.orbitSpeed}</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlanetDetail;
