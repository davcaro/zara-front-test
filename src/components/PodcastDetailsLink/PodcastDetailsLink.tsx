import { Link } from 'wouter';
import { useWindowScroll } from '@mantine/hooks';
import { Anchor, AnchorProps } from '@mantine/core';

type PodcastDetailsLinkProps = AnchorProps & {
  podcastId: string;
  children: React.ReactNode;
};

export const PodcastDetailsLink = ({ podcastId, children, ...props }: PodcastDetailsLinkProps) => {
  const [, scrollTo] = useWindowScroll();

  return (
    <Link href={`/podcast/${podcastId}`} onClick={() => scrollTo({ y: 0 })}>
      <Anchor {...props}>{children}</Anchor>
    </Link>
  );
};
