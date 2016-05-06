import React, { Component } from 'react';
import { Link } from 'react-router';
import Openings from '../components/Openings';
import AllSpots from '../components/AllSpots';

class SpotsContainer extends Component {
  render(){
    return(
      <div>
        <p><Link to={'/parkings'}>Available Parking</Link></p>
        <Home />
      </div>
    )
  }
}

export default SpotsContainer;
