import { useQuery } from '@tanstack/react-query';
import ky from 'ky';
import { Podcast } from '@/types/podcast';

const API_URL = import.meta.env.VITE_API_URL;

type FetchPodcastsProps = {
  genre: number;
  limit: number;
};

type PodcastResult = {
  id: { attributes: { 'im:id': string } };
  'im:name': { label: string };
  'im:image': Array<{ label: string }>;
  'im:artist': { label: string };
};

type PodcastsListResult = {
  feed: { entry: Array<PodcastResult> };
};

const fetchPodcasts = ({ genre, limit }: FetchPodcastsProps) =>
  ky
    .get(`us/rss/toppodcasts/genre=${genre}/limit=${limit}/json`, { prefixUrl: API_URL })
    .json() as Promise<PodcastsListResult>;

const transformPodcasts: (podcasts: PodcastsListResult) => Array<Podcast> = (podcasts) =>
  podcasts.feed.entry.map((podcast) => ({
    id: podcast.id.attributes['im:id'],
    name: podcast['im:name'].label,
    artist: podcast['im:artist'].label,
    image: podcast['im:image'].at(-1)?.label || '',
  }));

export const useFetchPodcasts = (params: FetchPodcastsProps) =>
  useQuery({
    queryKey: ['podcasts', params],
    queryFn: () => fetchPodcasts(params),
    select: transformPodcasts,
  });
