import Card from './LocationCard';
import { useLocation } from '../hooks/useLocation';
import { Location } from '../types';


const LocationList = () => {
    const { location, loading, error } = useLocation();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="location-list flex flex-wrap gap-6 justify-center">
            {location.map((location: Location) => (
                <Card key={location.id} location={location} />
            ))}
        </div>
    );
};
export default LocationList;