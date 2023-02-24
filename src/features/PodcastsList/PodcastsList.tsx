import { useInputState } from '@mantine/hooks';
import { Stack } from '@mantine/core';
import { useFetchPodcasts } from '@/hooks/api/useFetchPodcasts';
import { useFuseSearchPodcasts } from './useFuseSearchPodcasts';
import { PodcastsGrid } from './PodcastsGrid';
import { SearchBar } from './SearchBar';

const GENRE_ID = import.meta.env.VITE_PODCASTS_GENRE_ID;

export const PodcastsList = () => {
  const { data: podcasts } = useFetchPodcasts({ genre: GENRE_ID, limit: 100 });
  const [search, setSearch] = useInputState('');
  const filteredPodcasts = useFuseSearchPodcasts({
    search: search.trim(),
    podcasts: podcasts || [],
  });

  return (
    <Stack>
      <SearchBar value={search} onChange={setSearch} total={filteredPodcasts?.length || 0} />

      {filteredPodcasts && <PodcastsGrid podcasts={filteredPodcasts} />}
    </Stack>
  );
};
