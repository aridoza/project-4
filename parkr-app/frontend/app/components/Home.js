import React, { Component } from 'react';
import { Link } from 'react-router';

const Home = React.createClass({

  render(){
    var style = {
      display: 'flex',
      width: '100%',
      height: '30px',
      justifyContent: 'center',
      background: 'blue'
    };
    return(
      <div style={style}>
        <input type="text" placeholder="enter your zipcode" />
        <button><Link to="/parkings">View Openings</Link></button>
        <button><Link to="/newparking">Add Opening</Link></button>
      </div>
    )
  }
});

export default Home;
