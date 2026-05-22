import { useEffect, useState } from "react";
import { fetchEpisodes } from "../services/api";
import type { EpisodeParams } from "../services/api";
import type { Episode, ApiInfo } from "../types";

const emptyInfo: ApiInfo = { count: 0, pages: 0, next: null, prev: null };

export const useEpisodes = (params?: EpisodeParams) => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [info, setInfo] = useState<ApiInfo>(emptyInfo);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        fetchEpisodes(params)
            .then(({ results, info }) => {
                if (cancelled) return;
                setEpisodes(results);
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

    return { episodes, info, loading, error };
};
