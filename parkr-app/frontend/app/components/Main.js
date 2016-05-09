import React from 'react';
import Openings from './Openings';
import Header from './Header';
import Footer from './Footer';
import AllSpots from './AllSpots';
import SpotsContainer from '../containers/SpotsContainer';
import { Link } from 'react-router';


const Main = React.createClass({
  render(){
    var linkStyle = {
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    };
    var style = {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      background: '#FFD700'
    };
    return(
      <div style={style}>
        <ul style={linkStyle}>
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
