import { Grid } from '@mantine/core';
import { Podcast } from '@/types/podcast';
import { PodcastCard } from './PodcastCard';

type PodcastsGridProps = {
  podcasts: Podcast[];
};

export const PodcastsGrid = ({ podcasts }: PodcastsGridProps) => (
  <Grid justify="center" gutterXs="md" gutterMd="xl">
    {podcasts.map((podcast) => (
      <Grid.Col key={podcast.id} span={12} xs={6} md={4} lg={3} xl={12 / 5}>
        <PodcastCard podcast={podcast} />
      </Grid.Col>
    ))}
  </Grid>
);
