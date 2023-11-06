// PlanetDetail.tsx
import { Button } from '@nextui-org/react';
//import { PlanetData } from '../../types';
  
const PlanetDetail: React.FC = () => {
  return (
    <div className="planet-detail bg-gray-900  absolute top-20 bottom-20 right-5 p-5 rounded-lg w-[400px]">
        <p className='text-white'>Planet Name</p>
        <Button>Exit Detail View</Button>
    </div>
  );
};

export default PlanetDetail;
