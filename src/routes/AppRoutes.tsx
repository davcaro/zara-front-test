import { Redirect, Route, Switch } from 'wouter';
import { PodcastsList } from '@/features/PodcastsList';

export const AppRoutes = () => (
  <Switch>
    <Route path="/" component={PodcastsList} />

    <Route>
      <Redirect to="/" />
    </Route>
  </Switch>
);
