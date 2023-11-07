// PlanetsUpdater.tsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PlanetData } from '../../../types';
import { useSpeedControl } from '../../contexts/SpeedControlContext';

type PlanetsUpdaterProps = {
  setPlanetOrbitProgress: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  planets: PlanetData[];
};

const ORBIT_SPEED_FACTOR = 50;

const PlanetsUpdater: React.FC<PlanetsUpdaterProps> = ({ setPlanetOrbitProgress, planets }) => {
  const { speedFactor } = useSpeedControl();
  const lastElapsedTimeRef = useRef(0);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - lastElapsedTimeRef.current;
    lastElapsedTimeRef.current = elapsedTime;

    setPlanetOrbitProgress((prevOrbitProgress) => {
      return planets.reduce((acc, planet) => {
        const orbitSpeedRadians = (((planet.orbitSpeed * ORBIT_SPEED_FACTOR) / 360) * (2 * Math.PI)) * speedFactor;
        acc[planet.name] = (prevOrbitProgress[planet.name] || 0) + orbitSpeedRadians * deltaTime;
        return acc;
      }, { ...prevOrbitProgress });
    });
  });

  return null;
};

export default PlanetsUpdater;
