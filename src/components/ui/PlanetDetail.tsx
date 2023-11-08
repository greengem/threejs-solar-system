import { motion, AnimatePresence } from 'framer-motion';
import {Tabs, Tab} from "@nextui-org/tabs";
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';
import { Card, CardBody } from '@nextui-org/react';

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
          <div className='hidden md:block'>
            <Tabs aria-label="Planet detail tabs" color="secondary">
              <Tab key="details" title="Details">
                <Card><CardBody className='text-sm'>{selectedPlanet.description}</CardBody></Card>
              </Tab>
              <Tab key="stats" title="Stats">To do</Tab>
              <Tab key="photos" title="Photos">To do</Tab>
            </Tabs>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlanetDetail;
