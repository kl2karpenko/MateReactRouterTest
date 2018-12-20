import React, { Component } from 'react';
import { Route } from "react-router-dom";

export default class Slon extends Component {
  render() {
    return (
      <div style={{ marginLeft: 50 }}>
        <h4>Slon:</h4>

        <div style={{ marginLeft: 50 }}>
          <Route path={`${this.props.match.path}/mamont`} component={() => {
            return <h4>Mamont</h4>
          }} />
          <Route path={`${this.props.match.path}/mastodont`} component={() => {
            return <h4>Mastodont</h4>
          }} />
        </div>
      </div>
    );
  }
}