export type GetTrackDetailsOutputData = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

export type AttachmentDto = {
  url: string;
};

export type TrackListItemAttributes = {
  title: string;
  attachments: Array<AttachmentDto>;
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackListItemAttributes;
};

export type GetTrackDetailsOutput = {
  data: GetTrackDetailsOutputData;
};

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
    {
      headers: {
        'api-key': 'a2d30dd7-be5d-450e-b894-577c16affb4a',
      },
    }
  ).then((res) => res.json());
  return promise;
};

export type GetTrackListOutput = {
  data: Array<TrackListItemOutput>;
};

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
    {
      headers: {
        'api-key': 'a2d30dd7-be5d-450e-b894-577c16affb4a',
      },
    }
  ).then((res) => res.json());
  return promise;
};
