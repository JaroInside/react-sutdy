import React, { Component } from 'react';

import './App.css';
import Board from '../component/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>리액트 앱</p>
        <Board />
      </div>
    );
  }
}

export default App;
