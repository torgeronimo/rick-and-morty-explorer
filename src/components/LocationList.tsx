import { useState, useMemo } from 'react';
import Card from './LocationCard';
import LocationModal from './LocationModal';
import Spinner from './ui/Spinner';
import Pagination from './ui/Pagination';
import { useLocation } from '../hooks/useLocation';
import { Location } from '../types';

const PER_PAGE_OPTIONS = [10, 20] as const;

const LocationList = () => {
    const [search, setSearch] = useState('');
    const [perPage, setPerPage] = useState<10 | 20>(20);
    const [clientPage, setClientPage] = useState(1);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    const itemsPerApiPage = 20;
    const subPagesPerApiPage = itemsPerApiPage / perPage;
    const apiPage = Math.ceil(clientPage / subPagesPerApiPage);
    const offsetWithinApiPage = ((clientPage - 1) % subPagesPerApiPage) * perPage;

    const { location, info, loading, error } = useLocation({
        page: apiPage,
        name: search || undefined,
    });

    const totalClientPages = info.pages * subPagesPerApiPage;
    const displayedLocations = useMemo(
        () => location.slice(offsetWithinApiPage, offsetWithinApiPage + perPage),
        [location, offsetWithinApiPage, perPage]
    );

    const handleFilterChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setter(e.target.value);
        setClientPage(1);
    };

    const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPerPage(Number(e.target.value) as 10 | 20);
        setClientPage(1);
    };

    return (
        <>
            {/* Controls */}
            <div className="flex flex-wrap gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Search by location..."
                    value={search}
                    onChange={handleFilterChange(setSearch)}
                    className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500 flex-1 min-w-40"
                />
                <select
                    value={perPage}
                    onChange={handlePerPageChange}
                    className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500"
                >
                    {PER_PAGE_OPTIONS.map(n => (
                        <option key={n} value={n}>{n} per page</option>
                    ))}
                </select>
            </div>

            {/* Results count */}
            {!loading && !error && (
                <p className="text-gray-400 text-sm mb-4">{info.count} locations found</p>
            )}

            {/* List */}
            {loading ? (
                <Spinner />
            ) : error ? (
                <p className="text-red-400">Error: {error}</p>
            ) : displayedLocations.length === 0 ? (
                <p className="text-gray-400 text-center py-12">No locations found.</p>
            ) : (
                <div className="location-list flex flex-wrap gap-6 justify-center">
                    {displayedLocations.map((loc: Location) => (
                        <Card key={loc.id} location={loc} onClick={() => setSelectedLocation(loc)} />
                    ))}
                </div>
            )}

            <Pagination
                currentPage={clientPage}
                totalPages={totalClientPages}
                onPageChange={setClientPage}
            />

            {selectedLocation && (
                <LocationModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
            )}
        </>
    );
};

export default LocationList;
