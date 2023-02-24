import { useFetchPodcasts } from '@/hooks/api/useFetchPodcasts';
import { Grid } from '@mantine/core';
import { PodcastCard } from './PodcastCard';

const GENRE_ID = import.meta.env.VITE_PODCASTS_GENRE_ID;

export const PodcastsList = () => {
  const { data: podcasts } = useFetchPodcasts({ genre: GENRE_ID, limit: 100 });

  return (
    <Grid justify="center" gutterXs="md" gutterMd="xl">
      {podcasts?.map((podcast) => (
        <Grid.Col key={podcast.id} span={12} xs={6} md={4} lg={3} xl={12 / 5}>
          <PodcastCard podcast={podcast} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
