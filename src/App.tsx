import { useEffect, useState } from 'react';

export function App() {
  //const [selectedTrackId, setSelectedTrackId] = useState(null);
  //const [selectedTrack, setSelectedTrack] = useState(null);
  //const [tracks, setTracks] = useState(null);

  //   useEffect(() => {
  //     console.log('effect');
  //     fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
  //       headers: {
  //         'api-key': 'a2d30dd7-be5d-450e-b894-577c16affb4a',
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((json) => setTracks(json.data));
  //   }, []);

  //   useEffect(() => {
  //     if (!selectedTrackId) {
  //       return;
  //     }

  //     fetch(
  //       'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
  //         selectedTrackId,
  //       {
  //         headers: {
  //           'api-key': 'a2d30dd7-be5d-450e-b894-577c16affb4a',
  //         },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setSelectedTrack(json.data));
  //   }, [selectedTrackId]);

  //   if (tracks === null) {
  //     return (
  //       <>
  //         <h1>Musicfun Player</h1>
  //         <span>Loading...</span>
  //       </>
  //     );
  //   }

  //   if (tracks.length === 0) {
  //     return (
  //       <>
  //         <h1>Musicfun Player</h1>
  //         <span>No tracks</span>
  //       </>
  //     );
  //   }

  return (
    <>
      <h1>Musicfun Player</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null);
          setSelectedTrack(null);
        }}
      >
        Reset selection
      </button>
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* <ul>
          {tracks.map((track) => {
            return (
              <li
                key={track.id}
                style={{
                  border:
                    track.id === selectedTrackId ? '1px solid green' : 'none',
                }}
              >
                <div
                  onClick={() => {
                    setSelectedTrackId(track.id);
                  }}
                >
                  {track.attributes.title}
                </div>
                <audio
                  src={track.attributes.attachments[0].url}
                  controls
                ></audio>
              </li>
            );
          })}
        </ul> */}
        {/* <div>
          <h2>Details</h2>
          {!selectedTrack && !selectedTrackId && 'Track is not selected'}
          {!selectedTrack && selectedTrackId && 'Loading...'}
          {selectedTrack &&
            selectedTrackId &&
            selectedTrack.id !== selectedTrackId &&
            'Loading...'}
          {selectedTrack && (
            <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
}
