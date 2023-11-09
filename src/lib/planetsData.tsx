// Sun has radius of 1 and position of 0,0,0
import { PlanetData } from '../../types';
import { Vector3 } from 'three';

const baseOrbitSpeed = 1;

const planetsData: PlanetData[] = [
  {
    id: 1,
    name: "Mercury",
    texturePath: "/images/bodies/mercury_2k.jpg",
    position: new Vector3(1.5, 0, 0),
    radius: 0.1,
    rotationSpeed: 1,
    tilt: 0.00017,
    orbitSpeed: baseOrbitSpeed / 0.24,
    moons: [],
  },
  {
    id: 2,
    name: "Venus",
    texturePath: "/images/bodies/venus_surface_2k.jpg",
    position: new Vector3(2.2, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 3.09639,
    orbitSpeed: baseOrbitSpeed / 0.62,
    moons: [],
  },
  {
    id: 3,
    name: "Earth",
    texturePath: "/images/bodies/earth_2k.jpg",
    position: new Vector3(3, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 0.40928,
    orbitSpeed: 0.6,
    moons: [],
  },
  {
    id: 4,
    name: "Mars",
    texturePath: "/images/bodies/mars_2k.jpg",
    position: new Vector3(4, 0, 0),
    radius: 0.13,
    rotationSpeed: 0.5,
    tilt: 0.43965,
    orbitSpeed: baseOrbitSpeed / 1.88,
    moons: [],
  },
  {
    id: 5,
    name: "Jupiter",
    texturePath: "/images/bodies/jupiter_2k.jpg",
    position: new Vector3(6, 0, 0),
    radius: 0.25,
    rotationSpeed: 0.2,
    tilt: 0.05463,
    orbitSpeed: baseOrbitSpeed / 11.86,
    moons: [],
  },
  {
    id: 6,
    name: "Saturn",
    texturePath: "/images/bodies/saturn_2k.jpg",
    position: new Vector3(9, 0, 0),
    radius: 0.2,
    rotationSpeed: 0.1,
    tilt: 0.46653,
    orbitSpeed: baseOrbitSpeed / 29.46,
    rings: {
      texturePath: "/images/bodies/saturn_ring_2k.png",
      size: [0.22, 0.4],
    },
    moons: [],
  },
  {
    id: 7,
    name: "Uranus",
    texturePath: "/images/bodies/uranus_2k.jpg",
    position: new Vector3(13, 0, 0),
    radius: 0.18,
    rotationSpeed: 0.07,
    tilt: 1.70622,
    orbitSpeed: baseOrbitSpeed / 84.01,
    moons: [],
  },
  {
    id: 8,
    name: "Neptune",
    texturePath: "/images/bodies/neptune_2k.jpg",
    position: new Vector3(17, 0, 0),
    radius: 0.18,
    rotationSpeed: 0.06,
    tilt: 0.49428,
    orbitSpeed: baseOrbitSpeed / 164.8,
    rings: {
      texturePath: "/images/rings/neptune_rings.png",
      size: [0.15, 0.4],
    },
    moons: [],
  },

];

export default planetsData;
