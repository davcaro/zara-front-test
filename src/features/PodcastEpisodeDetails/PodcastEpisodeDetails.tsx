import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet';
import { Skeleton } from '@mantine/core';
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails';
import { PodcastDetailsLayout } from '@/components/PodcastDetailsLayout';
import { ErrorPage } from '@/components/ErrorPage';
import { EpisodeDetails } from './EpisodeDetails';

export const PodcastEpisodeDetails = () => {
  const [, params] = useRoute('/podcast/:podcastId/episode/:episodeId');
  const podcastId = params?.podcastId;
  const episodeId = params?.episodeId;
  const { isLoading, data: podcast, isError } = useFetchPodcastDetails(podcastId);

  const episode = podcast?.episodes.find(({ id }) => id === episodeId);

  if (isLoading || !episode) {
    return (
      <PodcastDetailsLayout>
        <Skeleton height={600} radius="md" />
      </PodcastDetailsLayout>
    );
  }

  if (isError) {
    return <ErrorPage />;
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
