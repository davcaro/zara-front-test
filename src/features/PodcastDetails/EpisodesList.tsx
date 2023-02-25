import { Stack } from '@mantine/core';
import { PodcastEpisode } from '@/types/podcastEpisode';
import { EpisodesCounter } from './EpisodesCounter';
import { EpisodesListTable } from './EpisodesListTable';

type EpisodesListProps = {
  podcastId: string;
  episodes: Array<PodcastEpisode>;
};

export const EpisodesList = ({ podcastId, episodes }: EpisodesListProps) => (
  <Stack>
    <EpisodesCounter count={episodes.length} />
    <EpisodesListTable podcastId={podcastId} episodes={episodes} />
  </Stack>
);
