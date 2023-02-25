import { Card, Divider, Group, Image, Stack, Text } from '@mantine/core';
import { PodcastDetailsLink } from '@/components/PodcastDetailsLink';
import { PodcastDetails } from '@/types/podcastDetails';

type PodcastDetailsCardProps = {
  podcast: PodcastDetails;
};

export const PodcastDetailsCard = ({ podcast }: PodcastDetailsCardProps) => (
  <Card shadow="sm" p="md" mb="xl">
    <Stack spacing="xl">
      <PodcastDetailsLink podcastId={podcast.id}>
        <Group position="center">
          <Image src={podcast.artworkUrl} alt={podcast.title} radius="md" width={200} />
        </Group>
      </PodcastDetailsLink>

      <Divider />

      <PodcastDetailsLink podcastId={podcast.id} variant="text">
        <Stack spacing={0} px="md">
          <Text weight={700}>{podcast.title}</Text>
          <Text fs="italic">by {podcast.author}</Text>
        </Stack>
      </PodcastDetailsLink>

      <Divider />

      <Stack spacing={0}>
        <Text weight={600}>Description:</Text>
        <Text fs="italic" weight={300} dangerouslySetInnerHTML={{ __html: podcast.description }} />
      </Stack>
    </Stack>
  </Card>
);
