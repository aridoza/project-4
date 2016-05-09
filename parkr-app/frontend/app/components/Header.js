import React, { Component } from 'react';
import { Link } from 'react-router';

  class Header extends Component {
    render(){
      return(
        <div>
          <p><Link to={'/'}>Home</Link></p>
          <p>Account</p>
          <p><Link to={'/about'}>About</Link></p>
          {this.props.children}
        </div>
      )
    }
  }

export default Header;
