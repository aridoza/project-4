import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {Button, Card, Row, Col} from 'react-materialize';

import Main from '../components/Main';
import Openings from '../components/Openings';
import Header from '../components/Header';
import Home from '../components/Home';
import AllSpots from '../components/AllSpots';
import About from '../components/About';
import NewParking from '../components/NewParking';
import OpeningsContainer from '../containers/OpeningsContainer';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/parkings" component={Openings} />
      <Route path="/about" component={About} />
      <Route path="/newparking" component={OpeningsContainer} />
    </Route>
  </Router>
)

export default routes;
