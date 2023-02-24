export type PodcastDetails = {
  collectionName: string;
  artistName: string;
  artworkUrl: string;
  description: string;
  episodesCount: number;
  episodes: Array<PodcastEpisode>;
};

export type PodcastEpisode = {
  id: number;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
};
