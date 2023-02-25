import { Redirect, Route, Switch } from 'wouter';
import { PodcastsList } from '@/features/PodcastsList';
import { PodcastDetails } from '@/features/PodcastDetails';
import { PodcastEpisodeDetails } from '@/features/PodcastEpisodeDetails';

export const AppRoutes = () => (
  <Switch>
    <Route path="/" component={PodcastsList} />
    <Route path="/podcast/:podcastId" component={PodcastDetails} />
    <Route path="/podcast/:podcastId/episode/:episodeId" component={PodcastEpisodeDetails} />

    <Route>
      <Redirect to="/" />
    </Route>
  </Switch>
);
