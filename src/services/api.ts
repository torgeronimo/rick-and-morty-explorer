const BASE_URL = 'https://rickandmortyapi.com/api';

import type { Character } from "../types";
import type { Episode } from "../types";
import type { Location } from "../types";

export const fetchCharacters = async (): Promise<Character[]> => {
    const reponse = await fetch(`${BASE_URL}/character`);
    if (!reponse.ok) {
        throw new Error('Failed to fetch characters');
    }
    const data = await reponse.json();
    // spell the API response type if needed, but we know results is an array of Character
    return data.results as Character[];
}

export const fetchEpisodes = async (): Promise<Episode[]> => {
    const response = await fetch(`${BASE_URL}/episode`);
    if (!response.ok) {
        throw new Error('Failed to fetch episodes');
    }
    const data = await response.json();
    return data.results as Episode[]; // You can type this as needed
}

export const fetchLocations = async (): Promise<Location[]> => {
    const response = await fetch(`${BASE_URL}/location`);
    if (!response.ok) {
        throw new Error('Failed to fetch locations');
    }
    const data = await response.json();
    return data.results as Location[]; // You can type this as needed
}