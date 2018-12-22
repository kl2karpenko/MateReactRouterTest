import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import { getData } from './utils/api';

import Header from './components/Header';
import EntryRenderer from './components/EntryRenderer';
import { GET_NAVIGATION_LIST } from "./redux/actionTypes";

// circleprogress
class AppRenderer extends Component {
  componentDidMount() {
    this.props.getNavigationList();
  }

  render() {
    const { list } = this.props;

    return (
      <div className="container">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.navList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNavigationList: () => {
      getData().then(
        list => {
          dispatch({
            type: GET_NAVIGATION_LIST,
            payload: {
              data: list
            }
          })
        }
      );
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRenderer);
