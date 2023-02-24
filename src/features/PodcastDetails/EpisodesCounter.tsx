import { Card, Title } from '@mantine/core';

type EpisodesCounterProps = {
  count: number;
};

export const EpisodesCounter = ({ count }: EpisodesCounterProps) => (
  <Card shadow="sm" p="md" mb="md">
    <Title order={3}>Episodes: {count}</Title>
  </Card>
);
