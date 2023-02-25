import { useQuery } from '@tanstack/react-query';
import { XMLParser } from 'fast-xml-parser';
import ky from 'ky';
import { PodcastDetails } from '@/types/podcastDetails';

const API_URL = import.meta.env.VITE_API_URL;

const getPodcastDetailsUrl = (id: string) => {
  const podcastDetailsUrl = new URL(`${API_URL}/lookup`);
  podcastDetailsUrl.searchParams.append('id', id);
  return podcastDetailsUrl.href;
};

const fetchPodcastDetails = async (id: string) => {
  const apiResponse = (await ky
    .get('https://api.allorigins.win/get', { searchParams: { url: getPodcastDetailsUrl(id) } })
    .json()) as { contents: string };

  const parsedData = JSON.parse(apiResponse.contents) as { results: Array<{ feedUrl: string }> };
  const { feedUrl } = parsedData.results[0];

  return ky.get(feedUrl).text();
};

type PodcastDetailsResponse = {
  title: string;
  description: string;
  image?: { url: string };
  'itunes:image'?: { href: string };
  'itunes:summary'?: string;
  'itunes:author': string;
  item: Array<{
    guid: string | { '#text': string };
    title: string;
    description: string;
    pubDate: string;
    'itunes:duration'?: string;
    enclosure: { url: string };
  }>;
};

const mapPodcastEpisodeId = (id: string | { '#text': string }) => {
  let episodeId = '';
  if (typeof id === 'string') {
    episodeId = id;
  } else if (typeof id === 'object') {
    const lastSlashIndex = id['#text'].lastIndexOf('/');
    const lastHashIndex = id['#text'].lastIndexOf('#');
    const lastIndexOfChars = Math.max(lastSlashIndex, lastHashIndex);
    episodeId = id['#text'].substring(lastIndexOfChars + 1);
  }
  return episodeId;
};

const transformPodcastDetails: (id: string, data: string) => PodcastDetails = (id, data) => {
  const xmlParser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
  });
  const podcastJson = xmlParser.parse(data);
  const podcast = podcastJson.rss.channel as PodcastDetailsResponse;

  return {
    id,
    title: podcast.title,
    description: podcast?.['itunes:summary'] || podcast?.description || '',
    author: podcast['itunes:author'],
    artworkUrl: podcast?.['itunes:image']?.href || podcast.image?.url,
    episodes: podcast.item.map((episode) => ({
      id: mapPodcastEpisodeId(episode.guid),
      title: episode.title,
      description: episode.description,
      releaseDate: episode.pubDate,
      duration: episode['itunes:duration'],
      trackUrl: episode.enclosure?.url,
    })),
  };
};

export const useFetchPodcastDetails = (id: string | null) =>
  useQuery({
    queryKey: ['podcast_details', id],
    queryFn: () => fetchPodcastDetails(id || ''),
    enabled: Boolean(id),
    select: (data) => transformPodcastDetails(id || '', data),
  });
