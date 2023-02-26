import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet';
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails';
import { PodcastDetailsLayout } from '@/components/PodcastDetailsLayout';
import { EpisodeDetails } from './EpisodeDetails';

export const PodcastEpisodeDetails = () => {
  const [, params] = useRoute('/podcast/:podcastId/episode/:episodeId');
  const podcastId = params?.podcastId;
  const episodeId = params?.episodeId;
  const { data: podcast } = useFetchPodcastDetails(podcastId);

  const episode = podcast?.episodes.find(({ id }) => id === episodeId);

  if (!podcastId || !podcast || !episode) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{episode.title}</title>
      </Helmet>

      <PodcastDetailsLayout podcast={podcast}>
        <EpisodeDetails episode={episode} />
      </PodcastDetailsLayout>
    </>
  );
};
