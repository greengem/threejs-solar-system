// PlanetDetail.tsx
import { Button, CardHeader } from '@nextui-org/react';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext';
//import { useSpeedControl } from '../contexts/SpeedControlContext';
import { Card, CardBody } from '@nextui-org/react';

const PlanetDetail: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useSelectedPlanet();
  //const { setSpeedFactor } = useSpeedControl();

  const handleExitDetailMode = () => {
    setSelectedPlanet(null);
    //setSpeedFactor(1);
  };

  if (!selectedPlanet) return null;

  return (
    <Card className='absolute bottom-5 right-5 w-[300px] bg-gray-900 shadow-lg'>
      <CardHeader className='text-lg font-semibold tracking-tight uppercase text-white px-5'>{selectedPlanet.name}</CardHeader>
      <CardBody className='px-5'>
        <p className='text-gray-500 text-xs mb-5'>{selectedPlanet.description}</p>
        <Button color='secondary' onClick={handleExitDetailMode}>
          Exit Detail View
        </Button>
      </CardBody>
    </Card>
  );
};

export default PlanetDetail;
