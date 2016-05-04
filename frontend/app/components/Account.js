import React, { Component } from 'react';

class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      successMsg: ''
    };
  }

  render(){
    return(
      <div>
        <h3>WIP</h3>
      </div>
    )
  }
}

export default Account;
