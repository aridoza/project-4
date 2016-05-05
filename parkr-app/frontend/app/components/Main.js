import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import SpotsContainer from '../containers/SpotsContainer';


const Main = React.createClass({
  render(){
    return(
      <div>
        <Header />
        <SpotsContainer />
        <Footer />
      </div>
    )
  }
})

export default Main;
