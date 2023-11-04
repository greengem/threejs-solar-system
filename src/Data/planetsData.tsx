// Sun has radius of 1 and position of 0,0,0
import { PlanetData } from '../../types';
import { Vector3 } from 'three';

const planetsData: PlanetData[] = [
    {
      name: "Mercury",
      texturePath: "/images/bodies/mercury_2k.jpg",
      position: new Vector3(1.2, 0, 0),
      radius: 0.15,
      rotationSpeed: 58.646,
      tilt: 0.034,
      orbitSpeed: 47.87,
      moons: [],
    },
    {
      name: "Venus",
      texturePath: "/images/bodies/venus_surface_2k.jpg",
      position: new Vector3(1.6, 0, 0),
      radius: 0.15,
      rotationSpeed: -243.025,
      tilt: 177.36,
      orbitSpeed: 35.02,
      moons: [],
    },
    {
      name: "Earth",
      texturePath: "/images/bodies/earth_2k.jpg",
      position: new Vector3(2, 0, 0),
      radius: 0.15,
      rotationSpeed: 1,
      tilt: 23.44,
      orbitSpeed: 29.78,
      wobble: true,
      moons: [],
    },
    {
      name: "Mars",
      texturePath: "/images/bodies/mars_2k.jpg",
      position: new Vector3(2.8, 0, 0),
      radius: 0.15,
      rotationSpeed: 1.025,
      tilt: 25.19,
      orbitSpeed: 24.077,
      moons: [],
    },
    {
      name: "Jupiter",
      texturePath: "/images/bodies/jupiter_2k.jpg",
      position: new Vector3(4.2, 0, 0),
      radius: 0.15,
      rotationSpeed: 0.414,
      tilt: 3.13,
      orbitSpeed: 13.07,
      moons: [],
    },
    {
      name: "Saturn",
      texturePath: "/images/bodies/saturn_2k.jpg",
      position: new Vector3(5.2, 0, 0),
      radius: 0.15,
      rotationSpeed: 0.444,
      tilt: 26.73,
      orbitSpeed: 9.68,
      rings: {
        texturePath: "/images/rings/saturn_rings.png",
        size: [0.2, 0.5],
      },
      moons: [],
    },
    {
      name: "Uranus",
      texturePath: "/images/bodies/uranus_2k.jpg",
      position: new Vector3(6.2, 0, 0),
      radius: 0.15,
      rotationSpeed: -0.718,
      tilt: 97.77,
      orbitSpeed: 6.8,
      moons: [],
    },
    {
      name: "Neptune",
      texturePath: "/images/bodies/neptune_2k.jpg",
      position: new Vector3(7.2, 0, 0),
      radius: 0.15,
      rotationSpeed: 0.671,
      tilt: 28.32,
      orbitSpeed: 5.43,
      rings: {
        texturePath: "/images/rings/neptune_rings.png",
        size: [0.15, 0.4],
      },
      moons: [],
    },
  ];
  
  export default planetsData;
  