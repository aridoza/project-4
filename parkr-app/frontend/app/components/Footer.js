import React, { Component } from 'react';

class Footer extends Component {
  render() {
    var style = {
      display: 'flex',
      justifyContent: 'center',
      height: '30px',
      color: 'white',
      background: 'black'
    }
    return(
      <h4 style={style}>Copyright &copy; 2016 Parkr LLC </h4>
    )
  }
}

export default Footer;
