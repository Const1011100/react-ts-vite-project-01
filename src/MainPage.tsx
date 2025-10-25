import { TracksList } from './components/TracksList';
import { TrackDetail } from './components/TrackDetail';
import { useState } from 'react';

export function MainPage() {
  const [trackId, setTrackId] = useState(null);

  const handleTrackSelect = (id) => {
    setTrackId(id);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <TracksList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetail trackId={trackId} />
      </div>
    </div>
  );
}
