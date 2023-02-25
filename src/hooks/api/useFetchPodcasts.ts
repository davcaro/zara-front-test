import { useQuery } from '@tanstack/react-query';
import ky from 'ky';
import { transformPodcasts } from '@/utils/podcast';
import { PodcastsListResult } from '@/types/podcastListResult';

type FetchPodcastsProps = {
  genre: number;
  limit: number;
};

const API_URL = import.meta.env.VITE_API_URL;

const fetchPodcasts = ({ genre, limit }: FetchPodcastsProps) =>
  ky
    .get(`us/rss/toppodcasts/genre=${genre}/limit=${limit}/json`, { prefixUrl: API_URL })
    .json() as Promise<PodcastsListResult>;

export const useFetchPodcasts = (params: FetchPodcastsProps) =>
  useQuery({
    queryKey: ['podcasts', params],
    queryFn: () => fetchPodcasts(params),
    select: transformPodcasts,
  });
