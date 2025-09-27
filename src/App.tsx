import { useEffect, useState } from 'react';

export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    console.log('effect');
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': 'a2d30dd7-be5d-450e-b894-577c16affb4a',
      },
    })
      .then((res) => res.json())
      .then((json) => setTracks(json.data));
  }, []);

  if (tracks === null) {
    return (
      <>
        <h1>Musicfun Player</h1>
        <span>Loading...</span>
      </>
    );
  }

  const newLiReactElements = tracks.map((track) => {
    return (
      <li
        key={track.id}
        style={{
          border: track.id === selectedTrackId ? '1px solid green' : 'none',
        }}
      >
        <div
          onClick={() => {
            setSelectedTrackId(track.id);
          }}
        >
          {track.attributes.title}
        </div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
      </li>
    );
  });

  if (tracks.length === 0) {
    return (
      <>
        <h1>Musicfun Player</h1>
        <span>No tracks</span>
      </>
    );
  }

  return (
    <>
      <h1>Musicfun Player</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null);
        }}
      >
        Reset selection
      </button>
      <ul>{newLiReactElements}</ul>
    </>
  );
}
