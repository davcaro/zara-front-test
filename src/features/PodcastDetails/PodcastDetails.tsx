import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet';
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails';
import { PodcastDetailsLayout } from '@/components/PodcastDetailsLayout';
import { EpisodesList } from './EpisodesList';

export const PodcastDetails = () => {
  const [, params] = useRoute('/podcast/:id');
  const podcastId = params?.id;
  const { data: podcast } = useFetchPodcastDetails(podcastId);

  if (!podcastId || !podcast) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{podcast.title}</title>
      </Helmet>

      <PodcastDetailsLayout podcast={podcast}>
        <EpisodesList podcastId={podcastId} episodes={podcast.episodes} />
      </PodcastDetailsLayout>
    </>
  );
};
