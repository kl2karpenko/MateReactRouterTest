import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Users from './components/Users'
import HomePageRenderer from './components/HomePageRenderer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav>
            <NavItem>
              <NavLink to="/login"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red"
                    }}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red"
                    }}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/users"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red"
                    }}>Users</NavLink>
            </NavItem>
          </Nav>

          <Switch>
            <Route path="/home/:pages?" component={HomePageRenderer} />
            <Route path="/login" component={() => { return <div>Login</div> }} />
            <Route path="/users/:id?" component={Users} />
            <Route path='*' component={() => { return <h1>Notfound</h1> }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
