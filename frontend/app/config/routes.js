import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import Brainify from '../components/Brainify';
import Account from '../components/Account';
import Brainz from '../components/Brainz';

import HomeContainer from '../containers/HomeContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path="/about" component={About} />
      <Route path="/brainify" component={Brainify} />
      <Route path="/account" component={Account} />
      <Route path="/brainz" component={Brainz} />
    </Route>
  </Router>
)

export default routes;
