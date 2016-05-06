import React, { Component } from 'react';
import AllSpots from './AllSpots';
import NewParking from './NewParking';
import axios from 'axios';
import ajaxHelpers from '../utils/ajaxHelpers';



const Openings = React.createClass({
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
  handleSubmit(parking){
    var newParkings = this.state.parkings.concat(parking);
    this.setState({ parkings: newParkings })
  },
  handleDelete(id){
    ajaxHelpers.deleteSpot(id);
  },

  render(){
    return(
      <div>
        <AllSpots parkings={this.state.parkings}/>
        <NewParking onChange={this.handleSubmit}/>
      </div>
    )
  }
});

export default Openings;
