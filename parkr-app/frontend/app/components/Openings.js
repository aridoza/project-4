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
    var id = this.state.parkings.id;
    ajaxHelpers.deleteSpot(id);
  },
  handleUpdate(id){
    var id = this.state.parkings.id;
    ajaxHelpers.updateSpot(id)
  },

  render(){
    var style = {
      background: 'black'
    };
    return(
      <div style={style}>
        <AllSpots parkings={this.state.parkings} id={this.state.parkings.id} deleteOpening={this.handleDelete} updateSpot={this.handleUpdate}/>
        <NewParking onChange={this.handleSubmit}/>
      </div>
    )
  }
});

export default Openings;
