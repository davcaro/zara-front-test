import { MantineProvider } from '@mantine/core';
import { Persister, PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { queryClient } from '@/lib/react-query';
import { createIDBPersister } from '@/stores/indexdb';

const idbPersister: Persister = createIDBPersister();

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: idbPersister }}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  </PersistQueryClientProvider>
);
