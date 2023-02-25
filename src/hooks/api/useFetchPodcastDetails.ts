import { useQuery } from '@tanstack/react-query';
import ky from 'ky';
import { PodcastDetails } from '@/types/podcastDetails';

const API_URL = import.meta.env.VITE_API_URL;

// TODO: Pagination
const getPodcastDetailsUrl = (id: string) => {
  const podcastDetailsUrl = new URL(`${API_URL}/lookup`);
  podcastDetailsUrl.searchParams.append('id', id);
  podcastDetailsUrl.searchParams.append('entity', 'podcastEpisode');
  return podcastDetailsUrl.href;
};

type PodcastDetailsStringfiedResponse = {
  contents: string;
};

const fetchPodcastDetails = (id: string) =>
  ky
    .get('https://api.allorigins.win/get', {
      searchParams: { url: getPodcastDetailsUrl(id) },
      timeout: 60 * 1000,
    })
    .json() as Promise<PodcastDetailsStringfiedResponse>;

type PodcastDetailsResponse = {
  results: Array<{
    kind: 'podcast' | 'podcast-episode';
    collectionId: string;
    collectionName: string;
    artistName?: string;
    artworkUrl600: string;
    trackId: number;
    trackName: string;
    description?: string;
    releaseDate: string;
    trackTimeMillis: number;
    trackCount?: number;
    episodeUrl?: string;
  }>;
};

const transformPodcastDetails: (res: PodcastDetailsStringfiedResponse) => PodcastDetails = (
  res
) => {
  const { results } = JSON.parse(res.contents) as PodcastDetailsResponse;

  const podcast = results.find(({ kind }) => kind === 'podcast');
  const episodes = results.filter(({ kind }) => kind === 'podcast-episode');

  return {
    collectionId: podcast?.collectionId || '',
    collectionName: podcast?.collectionName || '',
    artistName: podcast?.artistName || '',
    artworkUrl: podcast?.artworkUrl600 || '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // TODO: Fetch description
    episodesCount: podcast?.trackCount || 0,
    episodes: episodes.map((episode) => ({
      id: episode.trackId,
      trackName: episode.trackName,
      description: episode.description,
      releaseDate: episode.releaseDate,
      trackTimeMillis: episode.trackTimeMillis,
      trackUrl: episode.episodeUrl,
    })),
  };
};

export const useFetchPodcastDetails = (id: string | null) =>
  useQuery({
    queryKey: ['podcast_details', id],
    queryFn: () => fetchPodcastDetails(id || ''),
    enabled: Boolean(id),
    select: transformPodcastDetails,
  });
