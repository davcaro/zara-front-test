export type PodcastResult = {
  id: { attributes: { 'im:id': string } };
  'im:name': { label: string };
  'im:image': Array<{ label: string }>;
  'im:artist': { label: string };
};

export type PodcastsListResult = {
  feed: { entry: Array<PodcastResult> };
};
