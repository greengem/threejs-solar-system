// PlanetsUpdater.tsx
import { useFrame } from '@react-three/fiber';
import planetsData from '../Data/planetsData';

type PlanetsUpdaterProps = {
  setPlanetAngles: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
};

const PlanetsUpdater: React.FC<PlanetsUpdaterProps> = ({ setPlanetAngles }) => {
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    setPlanetAngles((prevAngles) => {
      const newAngles = { ...prevAngles };
      for (const planet of planetsData) {
        const orbitSpeedRadians = (planet.orbitSpeed / 360) * (2 * Math.PI);
        newAngles[planet.name] = orbitSpeedRadians * elapsedTime;
      }
      return newAngles;
    });
  });

  return null;
};

export default PlanetsUpdater;
