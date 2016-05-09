import React, { Component } from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

class NewParking extends Component {

  render(){
    var style = {
      display: 'flex',
      justifyContent: 'center',
      width: '80%',
      margin: '0 auto'
    };
    return(
      <div style={style}>
        <input ref="date" placeholder="Enter the date" name="date" onChange={this.props.onChangeDate}/>
        <br />
        <input ref="time" placeholder="Current time" name="time" onChange={this.props.onChangeTime}/>
        <br />
        <input ref="car_type" placeholder="Car type (ex: Sedan)" name="car_type" onChange={this.props.onChangeCar}/>
        <br />
        <input ref="description" placeholder="When will it be available?" name="description" onChange={this.props.onChangeDesc}/>
        <br />
        <button onClick={this.props.onSubmitSpot}>Add</button>
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
