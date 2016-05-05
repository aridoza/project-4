import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Body from '../components/Body';
import AllSpots from '../components/AllSpots';
import About from '../components/About';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Body} />
      <Route path="/parkings" component={AllSpots} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
)

export default routes;
