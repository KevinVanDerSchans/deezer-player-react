import useSWR from "swr";
import TrendingTracks from "../TrendingTracks/TrendingTracks";

const TracksTabContent = ({ tracks }) => {
    const { data } = useSWR({ entitiesIds: tracks, endpoint: '/api/track' })

    return (
        <TrendingTracks tracks={ data } />
    );
}

export default TracksTabContent;
