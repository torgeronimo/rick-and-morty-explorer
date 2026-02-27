import Card from "./EpisodeCard";
import { useEpisodes } from "../hooks/useEpisode";
import { Episode } from "../types";

const EpisodeList = () => {
    const { episodes, loading, error } = useEpisodes();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="episode-list flex flex-wrap gap-6 justify-center">
            {episodes.map((episode: Episode) => (
                <Card key={episode.id} episode={episode} />
            ))}
        </div>
    );
};

export default EpisodeList;