import React, { Component } from 'react';
import Loading from './Loading';

export class Home extends Component {
  render() {
    document.title = "Bohubrihi Restaurent";
    return (
      <div>
        <Loading />
      </div>
    )
  }
}

export default Home;