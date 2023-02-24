import { Card, Divider, Group, Image, Stack, Text } from '@mantine/core';
import { PodcastDetails } from '@/types/podcastDetails';

type PodcastDetailsCardProps = {
  podcast: PodcastDetails;
};

export const PodcastDetailsCard = ({ podcast }: PodcastDetailsCardProps) => (
  <Card shadow="sm" p="md" mb="xl">
    <Stack spacing="xl">
      <Group position="center">
        <Image src={podcast.artworkUrl} alt={podcast.collectionName} radius="md" width={200} />
      </Group>

      <Divider />

      <Stack spacing={0} px="md">
        <Text weight={700}>{podcast.collectionName}</Text>
        <Text fs="italic">by {podcast.artistName}</Text>
      </Stack>

      <Divider />

      <Stack spacing={0}>
        <Text weight={600}>Description:</Text>
        <Text fs="italic" weight={300}>
          {podcast.description}
        </Text>
      </Stack>
    </Stack>
  </Card>
);
