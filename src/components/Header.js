import React from "react";
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { push } from "react-router-redux";

import {
  SET_ACTIVE_ENTRY_TYPE
} from '../redux/actionTypes';

function Header ({ list, push, pathname }) {
  return (
    <Nav>
      {Object.keys(list).map(listItem => {
        const routeTo = `/${listItem}`;
        const routeToIsActive = routeTo === pathname;

        return (
          <NavItem
            key={listItem}
          >
            <NavLink
              onClick={() => push(routeTo)}
              style={{
                cursor: 'pointer',
                marginRight: 30,
                fontWeight: routeToIsActive ? "bold" : 'normal',
                color: routeToIsActive ? "red" : 'inherit'
              }}
            >
              {listItem}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
}

const mapStateToProps = ({ routing: { locationBeforeTransitions } }, { list }) => {
  const { pathname } = locationBeforeTransitions || {};

  return {
    pathname,
    list
  }
};

const mapDispatchToProps = dispatch => {
  return {
    push: url => {
      dispatch(push(url));
      dispatch({
        type: SET_ACTIVE_ENTRY_TYPE,
        payload: {
          active: url.replace('/', '')
        }
      });
    }
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));