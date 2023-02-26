import { Badge, Group, Skeleton, TextInput } from '@mantine/core';

type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  total: number;
  loading: boolean;
};

export const SearchBar = ({ value, onChange, total, loading }: SearchBarProps) => (
  <Group position="right" mb="md">
    <Skeleton visible={loading} width={50} radius="md">
      <Badge size="lg" radius="md" variant="filled">
        {total}
      </Badge>
    </Skeleton>

    <Skeleton visible={loading} width={200} radius="md">
      <TextInput placeholder="Filter podcasts..." value={value} onChange={onChange} />
    </Skeleton>
  </Group>
);
