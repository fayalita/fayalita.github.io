import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import Home from './containers/Home/Home';

export default () => (
  <Switch>
    <Route path={routes.HOME} component={Home} />
  </Switch>
);
