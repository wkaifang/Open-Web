import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import './App.css';

import { DatePicker } from 'antd';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Hello, World! </h1>
        <DatePicker />
      </div>
    );
  }
}

export default hot(module)(App);
