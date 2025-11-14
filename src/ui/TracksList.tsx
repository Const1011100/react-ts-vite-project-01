import { useEffect, useState } from 'react';
import { TrackItem } from './TrackItem.tsx';
import { getTracks, type TrackListItemOutput } from '../dal/api.ts';

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

export function TracksList({ selectedTrackId, onTrackSelect }: Props) {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

  useEffect(() => {
    getTracks().then((json) => setTracks(json.data));
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
  const handleClick = (trackId: string) => {
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
