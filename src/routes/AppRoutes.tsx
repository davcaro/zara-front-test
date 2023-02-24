import { Redirect, Route, Switch } from 'wouter';
import { PodcastsList } from '@/features/PodcastsList';
import { PodcastDetails } from '@/features/PodcastDetails';

export const AppRoutes = () => (
  <Switch>
    <Route path="/" component={PodcastsList} />
    <Route path="/podcast/:id" component={PodcastDetails} />

    <Route>
      <Redirect to="/" />
    </Route>
  </Switch>
);
