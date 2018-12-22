import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import AppRenderer from './AppRenderer';

// circleprogress
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRenderer />
      </BrowserRouter>
    );
  }
}

export default App;
