import React from 'react';
import Home from './Home';
import HomeContainer from '../containers/HomeContainer';

const Main = React.createClass({
  render(){
    return(
      <div>
        <HomeContainer />
        <Home />
      </div>
    )
  }
})

export default Main;
