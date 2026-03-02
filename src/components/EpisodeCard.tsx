import { Episode } from '../types'


interface EpisodeCardProps {
    episode: Episode;
    onClick?: () => void;
}
const EpisodeCard = ({ episode, onClick }: EpisodeCardProps) => {
    return (
        <div
            className="episode-card h-46 w-64 bg-gray-900 rounded-lg shadow-md p-4 flex justify-center flex-col cursor-pointer hover:border hover:border-green-500 transition-all"
            onClick={onClick}
        >
            <h2 className="text-lg font-bold text-white">{episode.name}</h2>
            <p className="text-sm text-gray-300">{episode.episode}</p>
            <p className="text-sm text-gray-300">{episode.air_date}</p>
            <p className="text-sm text-gray-300">{episode.characters.length} characters appeared</p>
        </div>
    )
}

export default EpisodeCard
