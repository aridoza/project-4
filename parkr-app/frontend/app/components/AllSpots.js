import React, { Component } from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import axios from 'axios';
import Openings from './Openings';
import { Panel } from 'react-bootstrap';

class AllSpots extends Component {

    render(){
      var claimStyle = {
        display: 'block',
        margin: '0 auto',
        width: '100px',
        color: 'black'
      };

      var style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        background: '#FFD700',
        width: '60%',
        margin: '0 auto'
      };
      var parkings = this.props.parkings.map((parking) => {
        return(
          <div key={parking.id} style={style}>
            <p bsStyle="success"></p>
            <hr />
            <p>Date: {parking.date} </p>
            <p>Time: {parking.time} </p>
            <p>Vehicle: {parking.car_type} </p>
            <p>Info: {parking.description} </p>
            <button style={claimStyle} onClick={this.props.deleteOpening}>Claim</button>
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
