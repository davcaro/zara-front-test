export type PodcastEpisode = {
  id: number;
  trackName: string;
  description?: string;
  releaseDate: string;
  trackTimeMillis: number;
  trackUrl?: string;
};
