import React, { Component } from 'react';
import NewParking from '../components/NewParking';

class OpeningsContainer extends Component {
  getInitialState(){
    console.log("getting initial state")
    return {
      date: '',
      time: '',
      car_type: '',
      description: ''
    };
  }
  handleDate(e){
    console.log(e.target.value);
    this.setState({date: e.target.value});
  }

  render(){
    return(
      <div>
        <input type="text" onChange={this.handleChange}/>
        <NewParking parking={} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default OpeningsContainer;
