// PlanetDetail.tsx
import {Tabs, Tab} from "@nextui-org/tabs";
import { useSelectedPlanet } from '../../contexts/SelectedPlanetContext';

const PlanetDetail: React.FC = () => {
  const [selectedPlanet] = useSelectedPlanet();

  if (!selectedPlanet) return null;

  return (
    <div className='absolute left-5 right-5 top-30 w-[400px]'>
        <h1 className='
          text-white
          mb-5 
          tracking-tight font-semibold 
          text-5xl lg:text-7xl xl:text-8xl 
        '>
          {selectedPlanet.name}
        </h1>
        <Tabs aria-label="Planet detail tabs" color="secondary">
          <Tab key="details" title="Details"><p className="text-sm">{selectedPlanet.description}</p></Tab>
          <Tab key="stats" title="Stats"></Tab>
          <Tab key="photos" title="Photos"></Tab>
        </Tabs>
    </div>
  );
};

export default PlanetDetail;
