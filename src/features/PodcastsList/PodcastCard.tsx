import { Card, Image, Text, Stack, Group } from '@mantine/core';
import { Podcast } from '@/types/podcast';

const IMAGE_HEIGHT = 120;

type PodcastCardProps = {
  podcast: Podcast;
};

export const PodcastCard = ({ podcast }: PodcastCardProps) => (
  <Stack spacing={0} style={{ height: '100%' }}>
    <Group position="center">
      <Image
        src={podcast.image}
        alt={podcast.name}
        width="auto"
        height={IMAGE_HEIGHT}
        radius={IMAGE_HEIGHT / 2}
        mb={IMAGE_HEIGHT / -2}
        style={{ zIndex: 1 }}
      />
    </Group>

    <Card shadow="sm" radius="md" pt={IMAGE_HEIGHT / 2} withBorder style={{ flex: 1 }}>
      <Stack spacing={0} mt="md">
        <Text weight={500} align="center">
          {podcast.name.toUpperCase()}
        </Text>

        <Text size="sm" align="center" color="dimmed" style={{ wordBreak: 'break-word' }}>
          Author: {podcast.artist}
        </Text>
      </Stack>
    </Card>
  </Stack>
);
