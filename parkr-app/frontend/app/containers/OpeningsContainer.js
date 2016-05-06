import React, { Component } from 'react';
import NewParking from '../components/NewParking';
import ajaxHelpers from '../utils/ajaxHelpers';

const OpeningsContainer = React.createClass({
  getInitialState(){
    console.log("getting initial state")
    return {
      date: '',
      time: '',
      car_type: '',
      description: ''
    };
  },
  handleOnChangeDate(e){
    console.log(e.target.value);
    this.setState({
      date: e.target.value
    })
  },
  handleOnChangeTime(e){
    console.log(e.target.value);
    this.setState({
      time: e.target.value
    })
  },
  handleOnChangeCar(e){
    console.log(e.target.value);
    this.setState({
      car_type: e.target.value
    })
  },
  handleOnChangeDesc(e){
    console.log(e.target.value);
    this.setState({
      description: e.target.value
    })
  },
  handleSubmitOpening(e){

    this.setState({
      date: this.state.date,
      time: this.state.time,
      car_type: this.state.car_type,
      description: this.state.description
    });
    const parking = {
      date: this.state.date,
      time: this.state.time,
      car_type: this.state.car_type,
      description: this.state.description
    };
    ajaxHelpers.addSpot(parking)
    // .then(function (response){
    //   console.log(response);
    // });

  },
  // onUpdate(e){
  //   console.log(e.target.value);
  //   this.setState({
  //     date: e.target.value
  //   });
  // }
  // handleDate(e){
  //   console.log(e.target.value);
  //   this.setState({date: e.target.value});
  // }
  // handleClick(){
  //
  //   console.log("the date is ");
  //   ajaxHelpers.addSpot(date, time, car_type, description);
  // }

  render(){
    return(
      <div>
        <NewParking
          onChangeDate={this.handleOnChangeDate}
          onChangeTime={this.handleOnChangeTime}
          onChangeCar={this.handleOnChangeCar}
          onChangeDesc={this.handleOnChangeDesc}
          onSubmitSpot={this.handleSubmitOpening}
          />
      </div>
    )
  }
})

export default OpeningsContainer;
