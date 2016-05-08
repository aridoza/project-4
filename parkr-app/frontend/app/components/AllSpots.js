import React, { Component } from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import axios from 'axios';
import Openings from './Openings';

class AllSpots extends Component {

    render(){

      var style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
      };
      var parkings = this.props.parkings.map((parking) => {
        return(
          <div key={parking.id} style={style}>
            <p>Date: {parking.date} </p>
            <p>Time: {parking.time} </p>
            <p>Vehicle: {parking.car_type} </p>
            <p>Info: {parking.description} </p>
            <button onClick={this.props.deleteOpening}>Claim</button>
            <button onClick={this.props.updateSpot}>Update</button>
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
