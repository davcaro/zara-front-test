import { XMLParser } from 'fast-xml-parser';
import { PodcastDetails } from '@/types/podcastDetails';
import { Podcast } from '@/types/podcast';
import { PodcastsListResult } from '@/types/podcastListResult';

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

export const mapPodcastEpisodeId = (id: string | { '#text': string }) => {
  let episodeId = '';
  if (typeof id === 'string') {
    episodeId = id;
  } else if (typeof id === 'object') {
    episodeId = id['#text'];
  }

  // Some old episodes id are a url, so we extract the id from it
  const lastSlashIndex = episodeId.lastIndexOf('/');
  const lastHashIndex = episodeId.lastIndexOf('#');
  const lastIndexOfChars = Math.max(lastSlashIndex, lastHashIndex);
  return episodeId.substring(lastIndexOfChars + 1);
};

export const transformPodcastDetails: (id: string, data: string) => PodcastDetails = (id, data) => {
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

export const transformPodcasts: (podcasts: PodcastsListResult) => Array<Podcast> = (podcasts) =>
  podcasts.feed.entry.map((podcast) => ({
    id: podcast.id.attributes['im:id'],
    name: podcast['im:name'].label,
    artist: podcast['im:artist'].label,
    image: podcast['im:image'].at(-1)?.label || '',
  }));
