// types.ts
import { Vector3 } from 'three';

export interface PlanetData {
    name: string;
    description: string;
    texturePath: string;
    position: Vector3;
    radius: number;
    rotationSpeed: number;
    tilt: number;
    orbitSpeed: number;
    moons: MoonData[];
    wobble?: boolean;
    rings?: RingsData;
    orbitalPosition?: Vector3;
}

export interface RingsData {
    texturePath: string;
    size: [number, number];
}

export interface MoonData {
    name: string;
}
