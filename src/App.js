import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import './App.css';

import Users from './components/Users'
import HomePageRenderer from './components/HomePageRenderer'

class App extends Component {
  componentDidMount() {
    /// fetch -> get urls
    // this.state.urls => []
  }

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

          {/*<Route path="/home" component={() => { return <div>Home</div> }} />*/}
          <Route path="/home/:pages?" component={HomePageRenderer} />
          <Route path="/login" component={() => { return <div>Login</div> }} />
          <Route path="/users/:id?" component={Users} />
          <Route component={() => { return <h1>Notfound</h1> }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
