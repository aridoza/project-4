import React, { Component } from 'react';
import AllSpots from './AllSpots';
import axios from 'axios';
import ajaxHelpers from '../utils/ajaxHelpers';

const Body = React.createClass({
  getInitialState(){
    return { parkings: [] }
  },
  componentDidMount(){
    console.log("component mounted");
    ajaxHelpers.getAllSpots(function(data) {
      if(data){
        this.setState({ parkings: data })
      } else {
        console.log("error getting the parking data")
      }
    }.bind(this));
  },

  render(){
    return(
      <div>

      </div>
    )
  }
});

export default Body;
