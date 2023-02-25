import { Card, Image, Text, Stack, Group } from '@mantine/core';
import { PodcastDetailsLink } from '@/components/PodcastDetailsLink';
import { Podcast } from '@/types/podcast';

const IMAGE_HEIGHT = 120;

type PodcastListItemProps = {
  podcast: Podcast;
};

export const PodcastListItem = ({ podcast }: PodcastListItemProps) => (
  <Stack spacing={0} style={{ height: '100%' }}>
    <Group position="center">
      <PodcastDetailsLink podcastId={podcast.id} style={{ zIndex: 1 }}>
        <Image
          src={podcast.image}
          alt={podcast.name}
          width="auto"
          height={IMAGE_HEIGHT}
          radius={IMAGE_HEIGHT / 2}
          mb={IMAGE_HEIGHT / -2}
        />
      </PodcastDetailsLink>
    </Group>

    <PodcastDetailsLink podcastId={podcast.id} style={{ flex: 1 }}>
      <Card shadow="sm" radius="md" pt={IMAGE_HEIGHT / 2} h="100%" withBorder>
        <Stack spacing={0} mt="md">
          <Text weight={500} align="center">
            {podcast.name.toUpperCase()}
          </Text>

          <Text size="sm" align="center" color="dimmed" style={{ wordBreak: 'break-word' }}>
            Author: {podcast.artist}
          </Text>
        </Stack>
      </Card>
    </PodcastDetailsLink>
  </Stack>
);
