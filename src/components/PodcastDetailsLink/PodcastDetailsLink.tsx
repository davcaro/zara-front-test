import { Link } from 'wouter';
import { Anchor, AnchorProps } from '@mantine/core';

type PodcastDetailsLinkProps = AnchorProps & {
  podcastId: string;
  children: React.ReactNode;
};

export const PodcastDetailsLink = ({ podcastId, children, ...props }: PodcastDetailsLinkProps) => (
  <Link href={`/podcast/${podcastId}`}>
    <Anchor {...props}>{children}</Anchor>
  </Link>
);
