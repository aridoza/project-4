import React, { Component } from 'react';

class About extends Component {
  render(){
    var words = {
      display: 'flex',
      justifyContent: 'center'
    };
    var imgStyle = {
      display: 'flex',
      justifyContent: 'center',
      height: '400',
      width: '100%',
      background: '#FFD700'
    };
    return(
      <div>
        <h4 style={words}>It can be tough finding a parking spot in the city, but Parkr wants to help make it easier for everyone. Join us, and help make your night out about the night out, not the drive out.</h4>
        <p style={imgStyle}><img src="https://media.giphy.com/media/Cwnz9eT3GWFhe/giphy.gif"/></p>
      </div>
    );
  }
}

export default About;
