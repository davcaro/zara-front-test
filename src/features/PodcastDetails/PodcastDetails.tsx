import { useRoute } from 'wouter';
import { Grid } from '@mantine/core';
import { PodcastDetailsCard } from '@/components/PodcastDetailsCard';
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails';
import { EpisodesList } from './EpisodesList';

export const PodcastDetails = () => {
  const [, params] = useRoute('/podcast/:id');
  const podcastId = params?.id || null;
  const { data: podcast } = useFetchPodcastDetails(podcastId);

  if (!podcastId || !podcast) {
    return null;
  }

  return (
    <Grid align="flex-start">
      <Grid.Col span={12} sm={4}>
        <PodcastDetailsCard podcast={podcast} />
      </Grid.Col>

      <Grid.Col span={12} offset={0} sm={8} md={7} offsetMd={1}>
        <EpisodesList
          podcastId={podcastId}
          episodes={podcast.episodes}
          episodesCount={podcast.episodesCount}
        />
      </Grid.Col>
    </Grid>
  );
};
