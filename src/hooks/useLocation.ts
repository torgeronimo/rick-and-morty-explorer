import { useState, useEffect } from 'react';
import { fetchLocations } from '../services/api';
import type { Location } from '../types';

export const useLocation = () => {
    const [location, setLocation] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const getLocation = async () => {
            try {
                const data = await fetchLocations();
                setLocation(data);
                console.log('Fetched location:', data); // Debug log
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

        getLocation();
    }, []);
    return { location, loading, error };
}