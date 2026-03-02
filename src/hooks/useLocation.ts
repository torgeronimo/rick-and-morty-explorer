import { useState, useEffect } from 'react';
import { fetchLocations } from '../services/api';
import type { LocationParams } from '../services/api';
import type { Location, ApiInfo } from '../types';

const emptyInfo: ApiInfo = { count: 0, pages: 0, next: null, prev: null };

export const useLocation = (params?: LocationParams) => {
    const [location, setLocation] = useState<Location[]>([]);
    const [info, setInfo] = useState<ApiInfo>(emptyInfo);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        fetchLocations(params)
            .then(({ results, info }) => {
                if (cancelled) return;
                setLocation(results);
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

    return { location, info, loading, error };
};
