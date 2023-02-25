import { Card, Divider, Group, Text, Title } from '@mantine/core';
import { PodcastEpisode } from '@/types/podcastEpisode';

type EpisodeDetailsProps = {
  episode: PodcastEpisode;
};

export const EpisodeDetails = ({ episode }: EpisodeDetailsProps) => (
  <Card shadow="sm" p="md">
    <Title mb="md">{episode.title}</Title>
    {episode.description && <Text dangerouslySetInnerHTML={{ __html: episode.description }} />}

    {episode.trackUrl && (
      <>
        <Divider my="xl" />

        <Group grow>
          <audio controls src={episode.trackUrl} />
        </Group>
      </>
    )}
  </Card>
);
