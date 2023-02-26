import { Grid, Skeleton } from '@mantine/core';
import { PodcastDetails } from '@/types/podcastDetails';
import { PodcastDetailsCard } from './PodcastDetailsCard';

type PodcastDetailsLayoutProps = {
  podcast?: PodcastDetails;
  children: React.ReactNode;
};

export const PodcastDetailsLayout = ({ podcast, children }: PodcastDetailsLayoutProps) => (
  <Grid align="flex-start">
    <Grid.Col span={12} sm={4}>
      {podcast ? <PodcastDetailsCard podcast={podcast} /> : <Skeleton height={400} radius="md" />}
    </Grid.Col>

    <Grid.Col span={12} offset={0} sm={8} md={7} offsetMd={1}>
      {children}
    </Grid.Col>
  </Grid>
);
