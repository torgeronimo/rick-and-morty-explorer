import { useEffect, useState } from "react";
import { fetchCharacters } from "../services/api";
import type { Character } from "../types";

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const getCharacters = async () => {
        try {
            const data = await fetchCharacters();
            setCharacters(data);
            console.log('Fetched characters:', data); // Debug log
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

        getCharacters();
    }, []);

    return { characters, loading, error };
};