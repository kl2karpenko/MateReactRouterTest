import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { syncHistoryWithStore } from 'react-router-redux';

import history from './redux/history';
import { Provider } from 'react-redux';

import store from './redux/createStore';

import AppRenderer from './AppRenderer';

const customHistory = syncHistoryWithStore(history, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={customHistory}>
          <AppRenderer />
        </Router>
      </Provider>
    );
  }
}

export default App;
