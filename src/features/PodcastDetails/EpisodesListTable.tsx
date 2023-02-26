import { Link } from 'wouter';
import { useWindowScroll } from '@mantine/hooks';
import { Anchor, Card, Table, Text } from '@mantine/core';
import { intlFormat } from 'date-fns';
import { formatDuration } from '@/utils/dates';
import { PodcastEpisode } from '@/types/podcastEpisode';

type EpisodeListItemProps = {
  podcastId: string;
  episode: PodcastEpisode;
};

const EpisodeListItem = ({ podcastId, episode }: EpisodeListItemProps) => {
  const [, scrollTo] = useWindowScroll();

  return (
    <tr>
      <td>
        <Link href={`/podcast/${podcastId}/episode/${episode.id}`} onClick={() => scrollTo({ y: 0 })}>
          <Anchor>{episode.title}</Anchor>
        </Link>
      </td>

      <td>
        <Text>
          {intlFormat(new Date(episode.releaseDate), {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </Text>
      </td>

      <td>{episode.duration && <Text>{formatDuration(episode.duration)}</Text>}</td>
    </tr>
  );
};

type EpisodesListTableProps = {
  podcastId: string;
  episodes: Array<PodcastEpisode>;
};

export const EpisodesListTable = ({ podcastId, episodes }: EpisodesListTableProps) => (
  <Card shadow="sm" p="md">
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>

      <tbody>
        {episodes.map((episode) => (
          <EpisodeListItem key={episode.id} podcastId={podcastId} episode={episode} />
        ))}
      </tbody>
    </Table>
  </Card>
);
