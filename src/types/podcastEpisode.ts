export type PodcastEpisode = {
  id: string;
  title: string;
  description?: string;
  releaseDate: string;
  duration?: string | number;
  trackUrl?: string;
};
