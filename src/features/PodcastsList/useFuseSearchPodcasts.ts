import { useMemo } from 'react';
import Fuse from 'fuse.js';
import { Podcast } from '@/types/podcast';

type UseFuseSearchPodcastsProps = {
  search: string;
  podcasts: Array<Podcast>;
};

const SEARCH_OPTIONS = {
  keys: ['name', 'artist'],
  threshold: 0.4,
};

export const useFuseSearchPodcasts = ({ search, podcasts }: UseFuseSearchPodcastsProps) => {
  const filteredPodcasts = useMemo(() => {
    if (!search.length) {
      return podcasts;
    }

    const fuseList = new Fuse(podcasts, SEARCH_OPTIONS);
    return fuseList.search(search).map(({ item }) => item);
  }, [podcasts, search]);

  return filteredPodcasts;
};
