import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import { Router } from "react-router-dom";

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux'

import store from './redux/createStore';

import AppRenderer from './AppRenderer';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
          <AppRenderer />
        </Router>
      </Provider>
    );
  }
}

export default App;
