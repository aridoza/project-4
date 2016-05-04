import React, { Component } from 'react';

class Brainify extends Component {
  render(){
    return(
      <div>
        <input placeholder='Topic' type='text' name='Topic'/>
        <input placeholder='parietal' type='text' name='parietal'/>
        <input placeholder='temporal' type='text' name='temporal'/>
        <input placeholder='occipital' type='text' name='occipital'/>
        <input placeholder='frontal' type='text' name='frontal'/>
        <button>Complete</button>
      </div>
    )
  }
}

export default Brainify;
