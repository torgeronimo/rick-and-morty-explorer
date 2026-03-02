import { useEffect, useState } from "react";
import { fetchCharacters } from "../services/api";
import type { CharacterParams } from "../services/api";
import type { Character, ApiInfo } from "../types";

const emptyInfo: ApiInfo = { count: 0, pages: 0, next: null, prev: null };

export const useCharacters = (params?: CharacterParams) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [info, setInfo] = useState<ApiInfo>(emptyInfo);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        fetchCharacters(params)
            .then(({ results, info }) => {
                if (cancelled) return;
                setCharacters(results);
                setInfo(info);
            })
            .catch((err: unknown) => {
                if (cancelled) return;
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(params)]);

    return { characters, info, loading, error };
};
