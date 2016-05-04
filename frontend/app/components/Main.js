import React, { Component } from 'react';
import Home from './Home';
import Footer from './Footer';
import Topnav from './Topnav';
import HomeContainer from '../containers/HomeContainer';
import { Link } from 'react-router';

class Main extends Component {
  render(){
    return(
      <div>
        <div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/brainify'}>Brainify</Link></li>
            <li><Link to={'/account'}>Account</Link></li>
            <li><Link to={'/brainz'}>View Data</Link></li>
          </ul>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
