import { Anchor, AppShell, Box, Group, Header, Loader, Title } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useIsFetching } from '@tanstack/react-query';
import { Link } from 'wouter';

type LayoutProps = {
  children: React.ReactNode;
};

const LAYOUT_PADDING = { 0: 'xs', xs: 'md', lg: '7%', xl: '10%' };

const AppHeader = () => {
  const [, scrollTo] = useWindowScroll();

  const fetchingRequests = useIsFetching();

  return (
    <Header height={60} px={LAYOUT_PADDING} py="xs">
      <Group position="apart">
        <Link href="/" onClick={() => scrollTo({ y: 0 })}>
          <Anchor>
            <Title color="blue.7">Podcaster</Title>
          </Anchor>
        </Link>

        {!!fetchingRequests && <Loader color="blue.7" />}
      </Group>
    </Header>
  );
};

export const Layout = ({ children }: LayoutProps) => (
  <AppShell
    header={<AppHeader />}
    padding="xl"
    sx={(theme) => ({ main: { backgroundColor: theme.colors.gray[0] } })}
  >
    <Box px={LAYOUT_PADDING}>{children}</Box>
  </AppShell>
);
