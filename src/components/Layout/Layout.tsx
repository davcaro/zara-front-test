import { AppShell, Group, Header, Loader, Title } from '@mantine/core';

const AppHeader = () => (
  <Header height={60} px={{ 0: 'xs', xs: 'md', lg: '7%', xl: '10%' }} py="xs">
    <Group position="apart">
      <Title color="blue.7">Podcaster</Title>
      <Loader color="blue.7" />
    </Group>
  </Header>
);

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <AppShell
    header={<AppHeader />}
    padding="xl"
    styles={(theme) => ({ main: { backgroundColor: theme.colors.gray[0] } })}
  >
    {children}
  </AppShell>
);
