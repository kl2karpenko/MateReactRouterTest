import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';

export default function Header ({ list }) {
  return (
    <Nav>
      {Object.keys(list).map(listItem => (
        <NavItem
          key={listItem}
        >
          <NavLink
            to={`/${listItem}`}
            style={{
              marginRight: 30
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            {listItem}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}