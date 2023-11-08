// Sun has radius of 1 and position of 0,0,0
import { PlanetData } from '../../types';
import { Vector3 } from 'three';

const planetsData: PlanetData[] = [
  {
    name: "Mercury",
    texturePath: "/images/bodies/mercury_2k.jpg",
    position: new Vector3(1.2, 0, 0),
    radius: 0.1,
    rotationSpeed: 1,
    tilt: 0.034,
    orbitSpeed: 1,
    moons: [],
  },
  {
    name: "Venus",
    texturePath: "/images/bodies/venus_surface_2k.jpg",
    position: new Vector3(1.6, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 177.36,
    orbitSpeed: 0.8,
    moons: [],
  },
  {
    name: "Earth",
    texturePath: "/images/bodies/earth_2k.jpg",
    position: new Vector3(2, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 23.44,
    orbitSpeed: 0.6,
    wobble: true,
    moons: [],
  },
  {
    name: "Mars",
    texturePath: "/images/bodies/mars_2k.jpg",
    position: new Vector3(2.8, 0, 0),
    radius: 0.13,
    rotationSpeed: 0.5,
    tilt: 25.19,
    orbitSpeed: 0.4,
    moons: [],
  },
  {
    name: "Jupiter",
    texturePath: "/images/bodies/jupiter_2k.jpg",
    position: new Vector3(4.2, 0, 0),
    radius: 0.25,
    rotationSpeed: 0.2,
    tilt: 3.13,
    orbitSpeed: 0.2,
    moons: [],
  },
  {
    name: "Saturn",
    texturePath: "/images/bodies/saturn_2k.jpg",
    position: new Vector3(5.2, 0, 0),
    radius: 0.2,
    rotationSpeed: 0.1,
    tilt: 26.73,
    orbitSpeed: 0.1,
    rings: {
      texturePath: "/images/rings/saturn_rings.png",
      size: [0.15, 0.4],
    },
    moons: [],
  },
  {
    name: "Uranus",
    texturePath: "/images/bodies/uranus_2k.jpg",
    position: new Vector3(6.2, 0, 0),
    radius: 0.18,
    rotationSpeed: 0.07,
    tilt: 97.77,
    orbitSpeed: 0.08,
    moons: [],
  },
  {
    name: "Neptune",
    texturePath: "/images/bodies/neptune_2k.jpg",
    position: new Vector3(7.2, 0, 0),
    radius: 0.18,
    rotationSpeed: 0.06,
    tilt: 28.32,
    orbitSpeed: 0.06,
    rings: {
      texturePath: "/images/rings/neptune_rings.png",
      size: [0.15, 0.4],
    },
    moons: [],
  },

];

export default planetsData;
