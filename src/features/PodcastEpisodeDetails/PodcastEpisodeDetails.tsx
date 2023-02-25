import { useRoute } from 'wouter';
import { Grid } from '@mantine/core';
import { PodcastDetailsCard } from '@/components/PodcastDetailsCard';
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails';
import { EpisodeDetails } from './EpisodeDetails';

export const PodcastEpisodeDetails = () => {
  const [, params] = useRoute('/podcast/:podcastId/episode/:episodeId');
  const podcastId = params?.podcastId || null;
  const episodeId = params?.episodeId || null;
  const { data: podcast } = useFetchPodcastDetails(podcastId);

  const episode = podcast?.episodes.find((e) => e.id === Number(episodeId));

  if (!podcastId || !podcast || !episode) {
    return null;
  }

  return (
    <Grid align="flex-start">
      <Grid.Col span={12} sm={4}>
        <PodcastDetailsCard podcast={podcast} />
      </Grid.Col>

      <Grid.Col span={12} offset={0} sm={8} md={7} offsetMd={1}>
        <EpisodeDetails episode={episode} />
      </Grid.Col>
    </Grid>
  );
};
