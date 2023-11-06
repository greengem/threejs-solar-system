// Sun has radius of 1 and position of 0,0,0
import { PlanetData } from '../../types';
import { Vector3 } from 'three';

const planetsData: PlanetData[] = [
  {
    name: "Mercury",
    texturePath: "/images/bodies/mercury_2k.jpg",
    position: new Vector3(1.2, 0, 0),
    radius: 0.1, // Smaller radius for a user-friendly scale
    rotationSpeed: 1, // Slow rotation for visibility
    tilt: 0.034,
    orbitSpeed: 1, // Slow orbit speed
    moons: [],
  },
  {
    name: "Venus",
    texturePath: "/images/bodies/venus_surface_2k.jpg",
    position: new Vector3(1.6, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 177.36,
    orbitSpeed: 0.8, // Slightly slower orbit
    moons: [],
  },
  {
    name: "Earth",
    texturePath: "/images/bodies/earth_2k.jpg",
    position: new Vector3(2, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 23.44,
    orbitSpeed: 0.6, // Slower orbit
    wobble: true,
    moons: [],
  },
  {
    name: "Mars",
    texturePath: "/images/bodies/mars_2k.jpg",
    position: new Vector3(2.8, 0, 0),
    radius: 0.13, // Slightly smaller radius
    rotationSpeed: 0.5, // Slower rotation
    tilt: 25.19,
    orbitSpeed: 0.4, // Slower orbit
    moons: [],
  },
  {
    name: "Jupiter",
    texturePath: "/images/bodies/jupiter_2k.jpg",
    position: new Vector3(4.2, 0, 0),
    radius: 0.25, // Larger radius for visibility
    rotationSpeed: 0.2, // Very slow rotation
    tilt: 3.13,
    orbitSpeed: 0.2, // Very slow orbit
    moons: [],
  },
  {
    name: "Saturn",
    texturePath: "/images/bodies/saturn_2k.jpg",
    position: new Vector3(5.2, 0, 0),
    radius: 0.2, // Smaller radius for visibility
    rotationSpeed: 0.1, // Very slow rotation
    tilt: 26.73,
    orbitSpeed: 0.1, // Very slow orbit
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
    radius: 0.18, // Slightly smaller radius
    rotationSpeed: 0.07, // Very slow rotation
    tilt: 97.77,
    orbitSpeed: 0.08, // Very slow orbit
    moons: [],
  },
  {
    name: "Neptune",
    texturePath: "/images/bodies/neptune_2k.jpg",
    position: new Vector3(7.2, 0, 0),
    radius: 0.18, // Slightly smaller radius
    rotationSpeed: 0.06, // Very slow rotation
    tilt: 28.32,
    orbitSpeed: 0.06, // Very slow orbit
    rings: {
      texturePath: "/images/rings/neptune_rings.png",
      size: [0.15, 0.4],
    },
    moons: [],
  },
];

export default planetsData;
