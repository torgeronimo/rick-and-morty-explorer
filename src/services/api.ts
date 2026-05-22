import type { Character, Episode, Location, ApiInfo } from "../types";

const BASE_URL = '/api';

const emptyInfo: ApiInfo = { count: 0, pages: 0, next: null, prev: null };

function buildQuery(params: Record<string, string | number | undefined>): string {
    const query = Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== '')
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&');
    return query ? `?${query}` : '';
}

export interface CharacterParams {
    page?: number;
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
}

export interface EpisodeParams {
    page?: number;
    name?: string;
    episode?: string;
}

export interface LocationParams {
    page?: number;
    name?: string;
    type?: string;
    dimension?: string;
}

export const fetchCharacters = async (
    params?: CharacterParams
): Promise<{ results: Character[]; info: ApiInfo }> => {
    const response = await fetch(`${BASE_URL}/character${buildQuery({ ...params })}`);
    if (response.status === 404) return { results: [], info: emptyInfo };
    if (!response.ok) throw new Error('Failed to fetch characters');
    const data = await response.json();
    return { results: data.results as Character[], info: data.info as ApiInfo };
};

export const fetchEpisodes = async (
    params?: EpisodeParams
): Promise<{ results: Episode[]; info: ApiInfo }> => {
    const response = await fetch(`${BASE_URL}/episode${buildQuery({ ...params })}`);
    if (response.status === 404) return { results: [], info: emptyInfo };
    if (!response.ok) throw new Error('Failed to fetch episodes');
    const data = await response.json();
    return { results: data.results as Episode[], info: data.info as ApiInfo };
};

export const fetchCharactersByIds = async (ids: number[]): Promise<Character[]> => {
    if (ids.length === 0) return [];
    const response = await fetch(`${BASE_URL}/character/${ids.join(',')}`);
    if (!response.ok) throw new Error('Failed to fetch characters by ids');
    const data = await response.json();
    // API returns a single object when only 1 ID is requested
    return (Array.isArray(data) ? data : [data]) as Character[];
};

export const fetchLocations = async (
    params?: LocationParams
): Promise<{ results: Location[]; info: ApiInfo }> => {
    const response = await fetch(`${BASE_URL}/location${buildQuery({ ...params })}`);
    if (response.status === 404) return { results: [], info: emptyInfo };
    if (!response.ok) throw new Error('Failed to fetch locations');
    const data = await response.json();
    return { results: data.results as Location[], info: data.info as ApiInfo };
};
