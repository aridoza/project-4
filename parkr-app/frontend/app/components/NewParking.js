import React, { Component } from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

class NewParking extends Component {
  handleClick(){
    var date = '1/1/17';
    var time = '1:22pm';
    var car_type = 'Sedan';
    var description = '5 minutes';
    console.log("the date is" + date);
    ajaxHelpers.addSpot(date, time, car_type, description);
  }
  render(){
    return(
      <div>
        <input ref="date" placeholder="Enter the date" name="date" onChange={ e => this.setState({ date: e.target.value }) }/>
        <input ref="time" placeholder="Current time" name="time" onChange={ e => this.setState({ time: e.target.value })}/>
        <input ref="car_type" placeholder="Car type (ex: Sedan)" name="car_type" onChange={ e => this.setState({ car_type: e.target.value })}/>
        <input ref="description" placeholder="When will it be available?" name="description" onChange={ e => this.setState({ description: e.target.value })}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

export default NewParking;


// var date = this.date.value;
// console.log(date);
// var time = e.time;
// var car_type = e.car_type;
// var description = e.description;
// ajaxHelpers.addSpot({
//   url: '',
//   type: 'POST',
//   data: { parking: { date: date, time: time, car_type: car_type, description: description } },
//   success: (parking) => {
//     this.props.handleSubmit(parking);
//   }
// });
