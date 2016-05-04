import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

const Home = React.createClass({
  render(){
    return(
      <div>
        <h3>Home Component</h3>
        <p onClick={ () => ajaxHelpers.getMindstuff() }><img src="https://figures.boundless-cdn.com/20119/raw/lobes-of-the-brain-nl.svg"/></p>
        <br />
        <br />

        <br />
      </div>
    )
  }
})

export default Home;
