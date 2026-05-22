import { Location } from '../types'

interface LocationCardProps {
    location: Location;
    onClick?: () => void;
}

const LocationCard = ({ location, onClick }: LocationCardProps) => {
    return (
        <div
            className="location-card h-46 w-64 bg-gray-900 rounded-lg shadow-md p-4 flex justify-center flex-col cursor-pointer hover:border border-green-500"
            onClick={onClick}
        >
            <h2 className="text-lg font-bold text-white">{location.name}</h2>
            <p className="text-green-400 text-sm font-mono">{location.type}</p>
            <p className="text-sm text-gray-300">{location.dimension}</p>
            <p className="text-sm text-gray-300">{location.residents.length} residents</p>
        </div>
    )
}

export default LocationCard
