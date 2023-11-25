import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state ={
    dishes: null,
    errMess: null
  }

  componentDidMount() {
    console.log('componentDidMount: ', this.state);
    axios.get('http://localhost:3001/dishes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          dishes: data
        })
      })
      .catch(error => {
        this.setState({
          errMess: error.message
        })
      })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate: ', this.state);
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default App;
