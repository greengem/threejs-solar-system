// PlanetDetail.tsx
import { Button, CardFooter, CardHeader } from '@nextui-org/react';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext';
import { useSpeedControl } from '../contexts/SpeedControlContext';
import { Card, CardBody } from '@nextui-org/react';

const PlanetDetail: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useSelectedPlanet();
  const { restoreSpeedFactor } = useSpeedControl();

  const handleExitDetailMode = () => {
    setSelectedPlanet(null);
    restoreSpeedFactor();
  };

  if (!selectedPlanet) return null;

  return (
    <Card className='absolute top-20 bottom-20 right-5 w-[300px] bg-gray-900 opacity-90'>
      <CardHeader className='text-lg font-semibold tracking-tight uppercase text-white px-5'>{selectedPlanet.name}</CardHeader>
      <CardBody className='px-5 overflow-scroll text-gray-300 text-xs'>{selectedPlanet.description}</CardBody>
      <CardFooter>
        <Button color='secondary' onClick={handleExitDetailMode}>
          Exit Detail View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanetDetail;
