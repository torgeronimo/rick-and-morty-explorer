import Card from "./CharacterCard";
import { useCharacters } from "../hooks/useCharacters";
import { Character } from "../types";

const CharacterList = () => {
    const { characters, loading, error } = useCharacters();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-wrap gap-6 justify-center">
        {characters.map((character: Character) => (
            <Card key={character.id} character={character} />
        ))}
        </div>
    );
};

export default CharacterList;