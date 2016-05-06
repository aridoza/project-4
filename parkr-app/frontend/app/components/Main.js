import React from 'react';
import Openings from './Openings';
import Header from './Header';
import Footer from './Footer';
import AllSpots from './AllSpots';
import SpotsContainer from '../containers/SpotsContainer';
import { Link } from 'react-router';


const Main = React.createClass({
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/parkings">Available Parking</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

export default Main;
