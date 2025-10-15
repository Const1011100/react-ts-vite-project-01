import { useEffect, useState } from 'react';

export function TrackDetail() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const selectedTrackId = '88133ec1-f82d-4fbb-b53b-5138b6fc7b90';

  useEffect(() => {
    if (!selectedTrackId) {
      return;
    }

    fetch(
      'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
        selectedTrackId,
      {
        headers: {
          'api-key': 'a2d30dd7-be5d-450e-b894-577c16affb4a',
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data));
  }, [selectedTrackId]);

  return (
    <div>
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
    </div>
  );
}
