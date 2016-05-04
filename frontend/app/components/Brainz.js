import React, { Component } from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

class Brainz extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }
  componentWillMount() {
    ajaxHelpers.getMindstuff(function(data){
      if (data) {
        this.setState({data: data})
      } else {
        this.setState({error: true})
      }
    }.bind(this))
  }
  componentDidMount() {
    ajaxHelpers.getMindstuff(function(data){
      if (data) {
        this.setState({data: data})
      } else {
        this.setState({error: true})
      }
    }.bind(this))
  }
  renderData() {
    return this.state.data.map(function(mindstuffs, index){
      return(
        <div key={index}>
          <p>Brainify data:</p>
          <p>mindstuffs.lobe</p>
          <p>mindstuffs.url</p>
          <p>mindstuffs.concentration</p>
        </div>
      );
    });
  }
  render() {
    if (this.state.error) {
      return (
        <p>Error getting brains</p>
      )
    }
    if (this.state.data) {
      return(
        <div>
          {this.renderData()}
        </div>
      )
    }

  }
}

export default Brainz;
