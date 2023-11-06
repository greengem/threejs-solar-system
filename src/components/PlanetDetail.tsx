// PlanetDetail.tsx
import { Button } from '@nextui-org/react';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext';
//import { useSpeedControl } from '../contexts/SpeedControlContext';
import { Card, CardBody } from '@nextui-org/react';

const PlanetDetail: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useSelectedPlanet();
  //const { setSpeedFactor } = useSpeedControl();

  const handleExitDetailMode = () => {
    setSelectedPlanet(null);
    //setSpeedFactor(1); // Restore the speed to its previous value or a default one
  };

  // Render nothing if no planet is selected
  if (!selectedPlanet) return null;

  // If a planet is selected, render the detail card
  return (
    <Card className='absolute bottom-5 right-5 w-[300px] h-[300px] bg-gray-900 shadow-lg'>
      <CardBody>
        <h1 className='text-lg font-semibold tracking-tight uppercase text-white'>{selectedPlanet.name}</h1>
        <Button color='secondary' className='absolute bottom-5 left-5' onClick={handleExitDetailMode}>
          Exit Detail View
        </Button>
      </CardBody>
    </Card>
  );
};

export default PlanetDetail;
