
import { Character } from "../types";

interface CharacterCardProps {
    character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
    return (
        <div className="character-card h-94 w-64 bg-gray-900 rounded-lg shadow-md p-4">
            <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-lg font-bold text-white">{character.name}</h2>
            <p className="text-sm text-gray-300">{character.status}</p>
            <p className="text-sm text-gray-300">{character.species}</p>
            <p className="text-sm text-gray-300">{character.origin.name}</p>
        </div>
    )
}

export default CharacterCard
