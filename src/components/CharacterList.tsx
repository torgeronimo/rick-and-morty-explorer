import { useState, useMemo } from 'react';
import Card from "./CharacterCard";
import Spinner from "./ui/Spinner";
import Pagination from "./ui/Pagination";
import { useCharacters } from "../hooks/useCharacters";
import { Character } from "../types";

const PER_PAGE_OPTIONS = [10, 20] as const;

const CharacterList = () => {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const [perPage, setPerPage] = useState<10 | 20>(20);
    const [clientPage, setClientPage] = useState(1);

    const itemsPerApiPage = 20;
    const subPagesPerApiPage = itemsPerApiPage / perPage;
    const apiPage = Math.ceil(clientPage / subPagesPerApiPage);
    const offsetWithinApiPage = ((clientPage - 1) % subPagesPerApiPage) * perPage;

    const { characters, info, loading, error } = useCharacters({
        page: apiPage,
        name: search || undefined,
        status: status || undefined,
    });

    const totalClientPages = info.pages * subPagesPerApiPage;
    const displayedCharacters = useMemo(
        () => characters.slice(offsetWithinApiPage, offsetWithinApiPage + perPage),
        [characters, offsetWithinApiPage, perPage]
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
        <div>
            {/* Controls */}
            <div className="flex flex-wrap gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={handleFilterChange(setSearch)}
                    className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500 flex-1 min-w-40"
                />
                <select
                    value={status}
                    onChange={handleFilterChange(setStatus)}
                    className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500"
                >
                    <option value="">All Status</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
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
                <p className="text-gray-400 text-sm mb-4">{info.count} characters found</p>
            )}

            {/* List */}
            {loading ? (
                <Spinner />
            ) : error ? (
                <p className="text-red-400">Error: {error}</p>
            ) : displayedCharacters.length === 0 ? (
                <p className="text-gray-400 text-center py-12">No characters found.</p>
            ) : (
                <div className="flex flex-wrap gap-6 justify-center">
                    {displayedCharacters.map((character: Character) => (
                        <Card key={character.id} character={character} />
                    ))}
                </div>
            )}

            <Pagination
                currentPage={clientPage}
                totalPages={totalClientPages}
                onPageChange={setClientPage}
            />
        </div>
    );
};

export default CharacterList;
