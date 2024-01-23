"use client";
import TrackItem from "../TrackItem/TrackItem";
import Reveal from "../../utils/reveal";

const TrendingTracks = ({ header, tracks }) => {
  return (
    <Reveal duration={1} delay={0.2} y={50}>
      <section className="trending-tracks">

        <header className="trending-tracks-header">
          { !! header && <h1>{ header }</h1> }
        </header>

        <div className="trending-tracks-container">
          <ul className="trending-tracks-list">
            {
              tracks.map(( track, index) =>
                <TrackItem
                  key={ track.id }
                  index= { index }
                  playlist={ tracks }
                  track={ track }
                />
              )
            }
          </ul>
        </div>
      </section>
    </Reveal>
  );
}

export default TrendingTracks;
