import { Anchor, AppShell, Box, Group, Header, Loader, Title } from '@mantine/core';
import { useIsFetching } from '@tanstack/react-query';
import { Link } from 'wouter';

const LAYOUT_PADDING = { 0: 'xs', xs: 'md', lg: '7%', xl: '10%' };

const AppHeader = () => {
  const fetchingRequests = useIsFetching();

  return (
    <Header height={60} px={LAYOUT_PADDING} py="xs">
      <Group position="apart">
        <Link href="/">
          <Anchor>
            <Title color="blue.7">Podcaster</Title>
          </Anchor>
        </Link>

        {!!fetchingRequests && <Loader color="blue.7" />}
      </Group>
    </Header>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <AppShell
    header={<AppHeader />}
    padding="xl"
    styles={(theme) => ({ main: { backgroundColor: theme.colors.gray[0] } })}
  >
    <Box px={LAYOUT_PADDING}>{children}</Box>
  </AppShell>
);
