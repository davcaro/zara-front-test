import { useRoute } from 'wouter';
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails';
import { PodcastDetailsLayout } from '@/components/PodcastDetailsLayout';
import { EpisodesList } from './EpisodesList';

export const PodcastDetails = () => {
  const [, params] = useRoute('/podcast/:id');
  const podcastId = params?.id || null;
  const { data: podcast } = useFetchPodcastDetails(podcastId);

  if (!podcastId || !podcast) {
    return null;
  }

  return (
    <PodcastDetailsLayout podcast={podcast}>
      <EpisodesList
        podcastId={podcastId}
        episodes={podcast.episodes}
        episodesCount={podcast.episodesCount}
      />
    </PodcastDetailsLayout>
  );
};
