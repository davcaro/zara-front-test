import { PodcastEpisode } from './podcastEpisode';

export type PodcastDetails = {
  id: string;
  title: string;
  description: string;
  author: string;
  artworkUrl?: string;
  episodes: Array<PodcastEpisode>;
};
