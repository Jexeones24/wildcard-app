import React, { Component } from 'react';
import Workout from './components/Workout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Workout />
      </div>
    );
  }
}

export default App;
