import { Link, useRoute } from 'wouter';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export const ErrorPage = () => {
  const { classes } = useStyles();
  const [isHomePage] = useRoute('/');

  return (
    <Container className={classes.root}>
      <div className={classes.label}>500</div>

      <Title className={classes.title}>Something bad just happened...</Title>

      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        We have not been able to obtain the information. Don&apos;t worry, the development team will
        investigate the problem. Please try again later.
      </Text>

      {!isHomePage && (
        <Group position="center">
          <Link href="/">
            <Button variant="subtle" size="md">
              Take me back to home page
            </Button>
          </Link>
        </Group>
      )}
    </Container>
  );
};
