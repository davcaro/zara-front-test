import { useQuery } from '@tanstack/react-query';
import ky from 'ky';
import { transformPodcastDetails } from '@/utils/podcast';

const API_URL = import.meta.env.VITE_API_URL;
const CORS_API_URL = import.meta.env.VITE_CORS_API_URL;

const getPodcastDetailsUrl = (id: string) => {
  const podcastDetailsUrl = new URL(`${API_URL}/lookup`);
  podcastDetailsUrl.searchParams.append('id', id);
  return podcastDetailsUrl.href;
};

const fetchPodcastDetails = async (id: string) => {
  const apiResponse = (await ky
    .get('get', { prefixUrl: CORS_API_URL, searchParams: { url: getPodcastDetailsUrl(id) } })
    .json()) as { contents: string };

  const parsedData = JSON.parse(apiResponse.contents) as { results: Array<{ feedUrl: string }> };
  const { feedUrl } = parsedData.results[0];

  return ky.get(feedUrl).text();
};

export const useFetchPodcastDetails = (id?: string) =>
  useQuery({
    queryKey: ['podcast_details', id],
    queryFn: () => fetchPodcastDetails(id ?? ''),
    select: (data) => transformPodcastDetails(id ?? '', data),
    enabled: Boolean(id),
  });
