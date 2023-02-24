import { useMemo } from 'react';
import Fuse from 'fuse.js';
import { Podcast } from '@/types/podcast';

const SEARCH_OPTIONS = {
  keys: ['name', 'artist'],
  threshold: 0.4,
};

type UseFuseSearchPodcastsProps = {
  search: string;
  podcasts: Array<Podcast>;
};

export const useFuseSearchPodcasts = ({ search, podcasts }: UseFuseSearchPodcastsProps) => {
  const filteredPodcasts = useMemo(() => {
    if (!search.length) {
      return podcasts;
    }

    const fuseList = new Fuse(podcasts, SEARCH_OPTIONS);
    return fuseList.search(search).map(({ item }) => item);
  }, [search, podcasts]);

  return filteredPodcasts;
};
