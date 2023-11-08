import { motion, AnimatePresence } from 'framer-motion';
import {Tabs, Tab} from "@nextui-org/tabs";
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';

const PlanetDetail: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [selectedPlanet] = useSelectedPlanet();

  // Define your animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };
  
  

  return (
    <AnimatePresence>
      {visible && selectedPlanet && (
        <motion.div
          className='absolute left-5 right-5 top-30 w-[400px]'
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
            text-5xl lg:text-7xl xl:text-8xl 
          '>
            {selectedPlanet.name}
          </h1>
          <Tabs aria-label="Planet detail tabs" color="secondary">
            <Tab key="details" title="Details">
              <p className="text-sm">{selectedPlanet.description}</p>
            </Tab>
            <Tab key="stats" title="Stats"></Tab>
            <Tab key="photos" title="Photos"></Tab>
          </Tabs>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlanetDetail;
