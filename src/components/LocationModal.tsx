import { useEffect, useState } from 'react';
import { fetchCharactersByIds } from '../services/api';
import type { Location, Character } from '../types';
import Spinner from './ui/Spinner';

interface LocationModalProps {
    location: Location;
    onClose: () => void;
}

const LocationModal = ({ location, onClose }: LocationModalProps) => {
    const [residents, setResidents] = useState<Character[]>([]);
    const [loading, setLoading] = useState(location.residents.length > 0);
    const [error, setError] = useState<string | null>(null);
    
    // 💡 State tracker to manually force-trigger your useEffect refetch
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        // If there are no residents, there is nothing to fetch. Clear state safely.
        if (location.residents.length === 0) {
            setLoading(false);
            setError(null);
            setResidents([]);
            return;
        }

        const loadData = async () => {
            setLoading(true);
            setError(null);
            try {
                const ids = location.residents.map(url => Number(url.split('/').pop()));
                const data = await fetchCharactersByIds(ids);
                setResidents(data);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : 'Failed to load');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [location, retryCount]); // 💡 Triggers whenever the location changes OR retryCount increments

    const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={handleBackdrop}
        >
            <div className="bg-gray-900 rounded-xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border border-gray-700">
                {/* Header */}
                <div className="flex items-start justify-between p-5 border-b border-gray-700">
                    <div>
                        <h2 className="text-xl font-bold text-white mt-0.5">{location.name}</h2>
                        <p className="text-green-400 text-sm font-mono">{location.type} · {location.dimension}</p>
                        <p className="text-gray-400 text-sm mt-1">{location.residents.length} residents</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors ml-4 text-2xl leading-none"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {/* Body */}
                <div className="overflow-y-auto p-5">
                    {loading ? (
                        <div className="flex justify-center py-12"><Spinner /></div>
                    ) : error ? (
                        /* 🔄 TAILWIND DESIGNED ERROR REFRESH STATE */
                        <div className="flex flex-col items-center justify-center text-center py-12 px-4 max-w-md mx-auto">
                            <div className="mb-4 rounded-full bg-red-950/50 p-3 text-red-400 border border-red-800/50">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            
                            <h3 className="text-white font-medium text-base mb-1">Network Error</h3>
                            <p className="text-red-400 text-sm mb-5">{error}</p>
                            
                            <button
                                onClick={() => setRetryCount(prev => prev + 1)} // Increments count, forcing useEffect to fire
                                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white shadow transition duration-200 hover:bg-green-500 active:scale-95"
                            >
                                
                                Try Again
                            </button>
                        </div>
                    ) : residents.length === 0 ? (
                        <p className="text-gray-400 text-center py-8">No known residents.</p>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {residents.map(character => (
                                <div key={character.id} className="bg-gray-800 rounded-lg overflow-hidden text-center border border-gray-700/50">
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="w-full aspect-square object-cover"
                                        loading="lazy"
                                    />
                                    <p className="text-white text-xs font-medium px-2 py-1.5 truncate">{character.name}</p>
                                    <p className="text-gray-400 text-xs pb-2">{character.status}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LocationModal;