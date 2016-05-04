import React from 'react';
import { Link } from 'react-router';

const Topnav = React.createClass({
  render(){
    return(
      <div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li>Account</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

export default Topnav;
