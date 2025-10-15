import { useEffect, useState } from 'react';

export function TracksList() {
  const [tracks, setTracks] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

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
        <span>Loading...</span>
      </>
    );
  }

  if (tracks.length === 0) {
    return (
      <>
        <span>No tracks</span>
      </>
    );
  }

  return (
    <ul>
      {tracks.map((track) => {
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
      })}
    </ul>
  );
}
