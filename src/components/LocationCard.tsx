import { Location } from '../types'

interface LocationCardProps {
    location: Location;
    onClick?: () => void;
}

const LocationCard = ({ location, onClick }: LocationCardProps) => {
    return (
        <div
            className="location-card h-46 w-64 bg-gray-900 rounded-lg shadow-md p-4 flex justify-center flex-col cursor-pointer hover:border hover:border-green-500 transition-all"
            onClick={onClick}
        >
            <h2>{location.name}</h2>
            <p className="text-sm text-gray-300">{location.type}</p>
            <p className="text-sm text-gray-300">{location.dimension}</p>
            <p className="text-sm text-gray-300">{location.residents.length} residents</p>
        </div>
    )
}

export default LocationCard
