import { PodcastEpisode } from './podcastEpisode';

export type PodcastDetails = {
  collectionId: string;
  collectionName: string;
  artistName: string;
  artworkUrl: string;
  description: string;
  episodesCount: number;
  episodes: Array<PodcastEpisode>;
};
