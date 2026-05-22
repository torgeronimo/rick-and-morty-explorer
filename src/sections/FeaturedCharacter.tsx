import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Spinner from "../components/ui/Spinner";
import { fetchCharactersByIds } from "../services/api";
import { Character } from "../types";

const FEATURED_IDS = [1, 2, 3, 4, 5];

const FeaturedCharacter = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        fetchCharactersByIds(FEATURED_IDS)
            .then((results) => {
                if (cancelled) return;
                setCharacters(results);
            })
            .catch((err: unknown) => {
                if (cancelled) return;
                setError(err instanceof Error ? err.message : "Failed to fetch featured characters");
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">Featured Characters</h1>

            {loading ? (
                <Spinner />
            ) : error ? (
                <p className="text-red-400">Error: {error}</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-6 max-w-204">
                    {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedCharacter;