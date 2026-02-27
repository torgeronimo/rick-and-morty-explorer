// Shared type definitions used across the app

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    episode: string[];
    url: string;
    created: string;
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}


export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
// a dummy runtime symbol so the module actually exports something
// (some bundlers leave type-only imports intact, leading to the "no export"
// error you saw). Nothing in the app uses this value.
export const Character = null as unknown as Character;

export const Episode = null as unknown as Episode;

export const Location = null as unknown as Location;
