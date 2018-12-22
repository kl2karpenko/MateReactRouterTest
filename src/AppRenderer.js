import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import { getData } from './utils/api';

import Header from './components/Header';
import EntryRenderer from './components/EntryRenderer';

// circleprogress
class AppRenderer extends Component {
  state = {
    list: {},
    loading: true
  };

  componentDidMount() {
    getData().then(
      list => setTimeout(() => this.setState({
        list,
        loading: false
      }), 2000)
    )
  }

  render() {
    const { list, loading } = this.state;

    return (
      <div className="container">
        {loading ? <h1>LOADING</h1> : (
          <Fragment>
            <Header list={list} />

            <Switch>
              {Object.keys(list).map(listItem =>
                <Route
                  key={listItem}
                  path={`/${listItem}`}
                  component={() => <EntryRenderer entry={listItem} />}
                />
              )}
              <Route path='*' component={() => { return <h1>404</h1> }} />
            </Switch>
          </Fragment>
        )}
      </div>
    );
  }
}

export default AppRenderer;
