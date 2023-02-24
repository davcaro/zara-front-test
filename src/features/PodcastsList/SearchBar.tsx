import { Badge, Group, TextInput } from '@mantine/core';

type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  total: number;
};

export const SearchBar = ({ value, onChange, total }: SearchBarProps) => (
  <Group position="right" mb="md">
    <Badge size="lg" radius="md" variant="filled">
      {total}
    </Badge>

    <TextInput placeholder="Filter podcasts..." value={value} onChange={onChange} />
  </Group>
);
