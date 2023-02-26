import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet';
import { Skeleton } from '@mantine/core';
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails';
import { PodcastDetailsLayout } from '@/components/PodcastDetailsLayout';
import { ErrorPage } from '@/components/ErrorPage';
import { EpisodesList } from './EpisodesList';

export const PodcastDetails = () => {
  const [, params] = useRoute('/podcast/:id');
  const podcastId = params?.id;
  const { isLoading, data: podcast, isError } = useFetchPodcastDetails(podcastId);

  if (isLoading || !podcastId) {
    return (
      <PodcastDetailsLayout>
        <Skeleton height={70} radius="md" mb="xl" />
        <Skeleton height={700} radius="md" />
      </PodcastDetailsLayout>
    );
  }

  if (isError) {
    return <ErrorPage />;
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
