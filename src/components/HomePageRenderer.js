import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Slon from './Slon';

export default class HomePageRenderer extends Component {
  renderInsideRoutes = () => {
    const pages = this.props.match.params.pages;

    switch(pages) {
      case 'slon':
        return <div>Slon</div>;
      case 'person':
        return <div>Person</div>;
      default:
        return <div>Moska</div>;
    }
  };

  render() {
    return (
      <div>
        <Route path={`${this.props.match.path}/slon`} component={(props) => {
          return <div>
            <Slon {...props}></Slon>
          </div>;
        }} />
        <Route path={`${this.props.match.path}/person`} component={() => {
          return <h3>Person</h3>
        }} />
        {!this.props.match.params.pages ? <Route path={`${this.props.match.path}`} component={() => {
          return <h3>Moska</h3>
        }} /> : null}
      </div>
    )
  }
}