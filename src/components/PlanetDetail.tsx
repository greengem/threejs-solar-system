// PlanetDetail.tsx
import { Button } from '@nextui-org/react';
import { useSelectedPlanet } from '../contexts/SelectedPlanetContext'; // Import the context hook

const PlanetDetail: React.FC = () => {
  // Use the useSelectedPlanet hook to access the selected planet data
  const [selectedPlanet] = useSelectedPlanet();

  return (
    <div className="planet-detail bg-gray-900 absolute top-20 bottom-20 right-5 p-5 rounded-lg w-[400px]">
      {/* Check if a planet is selected and display its name */}
      {selectedPlanet ? (
        <>
          <p className='text-white'>{selectedPlanet.name}</p>
          <Button>Exit Detail View</Button>
        </>
      ) : (
        <p className='text-white'>No planet selected</p>
      )}
    </div>
  );
};

export default PlanetDetail;
