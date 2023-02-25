import { Stack } from '@mantine/core';
import { PodcastEpisode } from '@/types/podcastEpisode';
import { EpisodesCounter } from './EpisodesCounter';
import { EpisodesListTable } from './EpisodesListTable';

type EpisodesListProps = {
  podcastId: string;
  episodes: Array<PodcastEpisode>;
  episodesCount: number;
};

export const EpisodesList = ({ podcastId, episodes, episodesCount }: EpisodesListProps) => (
  <Stack>
    <EpisodesCounter count={episodesCount} />
    <EpisodesListTable podcastId={podcastId} episodes={episodes} />
  </Stack>
);
