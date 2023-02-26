import { Grid, Skeleton } from '@mantine/core';
import { Podcast } from '@/types/podcast';
import { PodcastListItem } from './PodcastListItem';

type PodcastsGridProps = {
  podcasts: Podcast[];
  loading: boolean;
};

type GridProps = {
  children: React.ReactNode;
};

const ListGrid = ({ children }: GridProps) => (
  <Grid justify="center" gutterXs="md" gutterMd="xl">
    {children}
  </Grid>
);
const GridCol = ({ children }: GridProps) => (
  <Grid.Col span={12} xs={6} md={4} lg={3} xl={12 / 5}>
    {children}
  </Grid.Col>
);

export const PodcastsGrid = ({ podcasts, loading }: PodcastsGridProps) => {
  if (loading) {
    return (
      <ListGrid>
        {[...Array(25)].map((_, index) => (
          <GridCol key={index}>
            <Skeleton height={250} radius="md" />
          </GridCol>
        ))}
      </ListGrid>
    );
  }

  return (
    <ListGrid>
      {podcasts.map((podcast) => (
        <GridCol key={podcast.id}>
          <PodcastListItem podcast={podcast} />
        </GridCol>
      ))}
    </ListGrid>
  );
};
