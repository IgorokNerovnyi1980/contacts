import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';

import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import AuthPage from './pages/Auth';
import ProfilePage from './pages/Profile';

const Routing = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={HomePage}
    />
    <Route
      path="/home"
      component={HomePage}
    />
    <Route
      path="/authorization"
      component={AuthPage}
    />
    <Route
      path="/profile"
      component={ProfilePage}
    />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routing;
