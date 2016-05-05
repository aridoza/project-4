import React, { Component } from 'react';
import { Link } from 'react-router';
import Body from '../components/Body';
import AllSpots from '../components/AllSpots';

class SpotsContainer extends Component {
  render(){
    return(
      <div>
        <p><Link to={'/parkings'}>Available Parking</Link></p>
        <Body />
      </div>
    )
  }
}

export default SpotsContainer;
