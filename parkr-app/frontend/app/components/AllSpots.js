import React, { Component } from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import axios from 'axios';

class AllSpots extends Component {

    render(){
      var parkings = this.props.parkings.map((parking) => {
        return(
          <div key={parking.id}>
            <p>Date: {parking.date}</p>
            <p>Time: {parking.time}</p>
            <p>Vehicle: {parking.car_type}</p>
            <p>Info: {parking.description}</p>
            <br />
          </div>
        )
      });
      return(
        <div>
          {parkings}
        </div>
      )
    }
  }

export default AllSpots;
