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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (location.residents.length === 0) {
            setLoading(false);
            return;
        }
        const ids = location.residents.map(url => Number(url.split('/').pop()));
        fetchCharactersByIds(ids)
            .then(setResidents)
            .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Failed to load'))
            .finally(() => setLoading(false));
    }, [location]);

    const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

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
                        <p className="text-green-400 text-sm font-mono">{location.type} · {location.dimension}</p>
                        <h2 className="text-xl font-bold text-white mt-0.5">{location.name}</h2>
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
                        <p className="text-red-400 text-center py-8">{error}</p>
                    ) : residents.length === 0 ? (
                        <p className="text-gray-400 text-center py-8">No known residents.</p>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {residents.map(character => (
                                <div key={character.id} className="bg-gray-800 rounded-lg overflow-hidden text-center">
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="w-full aspect-square object-cover"
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
