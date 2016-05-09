import React, { Component } from 'react';
import { Link } from 'react-router';
import {Button, Card, Row, Col} from 'react-materialize';


const Home = React.createClass({


  render(){
    var linkStyle = {
      color: 'gold'
    };
    var btnStyle = {
      display: 'block',
      textDecoration: 'none',
      height: '30',
      zIndex: '1',
      background: 'black',
      color: 'gold'
    };
    var style = {
      display: 'flex',
      width: '100%',
      height: '880',
      justifyContent: 'center',
      backgroundImage: 'url(https://media.giphy.com/media/Ak8asl6uQKmre/giphy.gif)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'

    };
    return(
      <div style={style}>
        <Button waves='light' style={btnStyle}><Link style={linkStyle} to="/parkings">View Openings</Link></Button>
        <Button floating large style={btnStyle}><Link style={linkStyle} to="/newparking">Add Opening</Link></Button>
      </div>
    )
  }
});

export default Home;
