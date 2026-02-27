import { useEffect, useState } from "react";
import { fetchEpisodes } from "../services/api";
import type { Episode } from "../types";

export const useEpisodes = () => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getEpisodes = async () => {
        try {
            const data = await fetchEpisodes();
            setEpisodes(data);
            console.log('Fetched episodes:', data); // Debug log
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
        };

        getEpisodes();
    }, []);

    return { episodes, loading, error };
}