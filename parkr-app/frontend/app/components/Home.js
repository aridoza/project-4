import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render(){
    return(
      <div>
        <input type="text" placeholder="enter your zipcode" />
        <button><Link to="/parkings">View Openings</Link></button>
        <button><Link to="/newparking">Add Opening</Link></button>
      </div>
    )
  }
}

export default Home;
