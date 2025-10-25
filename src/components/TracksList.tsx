import { useEffect, useState } from 'react';
import { TrackItem } from './TrackItem.tsx';

export function TracksList({ selectedTrackId, onTrackSelect }) {
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

  const handleResetClick = () => {
    onTrackSelect?.(null);
  };
  const handleClick = (trackId) => {
    onTrackSelect?.(trackId);
  };

  return (
    <div>
      <button onClick={handleResetClick}>reset</button>
      <hr />
      <ul>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === selectedTrackId}
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
