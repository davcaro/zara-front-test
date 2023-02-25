import { useRoute } from 'wouter';
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails';
import { PodcastDetailsLayout } from '@/components/PodcastDetailsLayout';
import { EpisodeDetails } from './EpisodeDetails';

export const PodcastEpisodeDetails = () => {
  const [, params] = useRoute('/podcast/:podcastId/episode/:episodeId');
  const podcastId = params?.podcastId || null;
  const episodeId = params?.episodeId || null;
  const { data: podcast } = useFetchPodcastDetails(podcastId);

  const episode = podcast?.episodes.find(({ id }) => id === episodeId);

  if (!podcastId || !podcast || !episode) {
    return null;
  }

  return (
    <PodcastDetailsLayout podcast={podcast}>
      <EpisodeDetails episode={episode} />
    </PodcastDetailsLayout>
  );
};
