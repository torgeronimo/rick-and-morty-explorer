import { useState, useMemo } from 'react';
import Card from "./EpisodeCard";
import EpisodeModal from "./EpisodeModal";
import Spinner from "./ui/Spinner";
import Pagination from "./ui/Pagination";
import { useEpisodes } from "../hooks/useEpisode";
import { Episode } from "../types";

const PER_PAGE_OPTIONS = [10, 20] as const;
const SEASONS = ['S01', 'S02', 'S03', 'S04', 'S05'];

const EpisodeList = () => {
    const [search, setSearch] = useState('');
    const [season, setSeason] = useState('');
    const [perPage, setPerPage] = useState<10 | 20>(20);
    const [clientPage, setClientPage] = useState(1);
    const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

    const itemsPerApiPage = 20;
    const subPagesPerApiPage = itemsPerApiPage / perPage;
    const apiPage = Math.ceil(clientPage / subPagesPerApiPage);
    const offsetWithinApiPage = ((clientPage - 1) % subPagesPerApiPage) * perPage;

    const { episodes, info, loading, error } = useEpisodes({
        page: apiPage,
        name: search || undefined,
        episode: season || undefined,
    });

    const totalClientPages = info.pages * subPagesPerApiPage;
    const displayedEpisodes = useMemo(
        () => episodes.slice(offsetWithinApiPage, offsetWithinApiPage + perPage),
        [episodes, offsetWithinApiPage, perPage]
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
                    placeholder="Search by episode..."
                    value={search}
                    onChange={handleFilterChange(setSearch)}
                    className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500 flex-1 min-w-40"
                />
                <select
                    value={season}
                    onChange={handleFilterChange(setSeason)}
                    className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500"
                >
                    <option value="">All Seasons</option>
                    {SEASONS.map(s => (
                        <option key={s} value={s}>{s.replace(/^S0*/, 'Season ')}</option>
                    ))}
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
                <p className="text-gray-400 text-sm mb-4">{info.count} episodes found</p>
            )}

            {/* List */}
            {loading ? (
                <Spinner />
            ) : error ? (
                <p className="text-red-400">Error: {error}</p>
            ) : displayedEpisodes.length === 0 ? (
                <p className="text-gray-400 text-center py-12">No episodes found.</p>
            ) : (
                <div className="episode-list flex flex-wrap gap-6 justify-center">
                    {displayedEpisodes.map((episode: Episode) => (
                        <Card key={episode.id} episode={episode} onClick={() => setSelectedEpisode(episode)} />
                    ))}
                </div>
            )}

            <Pagination
                currentPage={clientPage}
                totalPages={totalClientPages}
                onPageChange={setClientPage}
            />
        {selectedEpisode && (
            <EpisodeModal episode={selectedEpisode} onClose={() => setSelectedEpisode(null)} />
        )}
        </>
    );
};

export default EpisodeList;
