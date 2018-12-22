import React, { Component } from "react";
import { connect } from 'react-redux'

import { ListGroup, ListGroupItem } from 'reactstrap';
import { getDataEntry } from '../utils/api';
import { GET_ENTRY_DATA } from "../redux/actionTypes";

class EntryRenderer extends Component {
  componentDidMount() {
    const { entry } = this.props;
    this.props.getDataEntry(entry);
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <ListGroup style={{ marginTop: 30 }}>
        {data && data.map(({ name, title }) => (
          <ListGroupItem key={name || title}>
            {name || title}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.entry.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataEntry: entry => {
      getDataEntry(entry)
        .then(results => {
          dispatch({
            type: GET_ENTRY_DATA,
            payload: {
              data: results
            }
          });
        });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryRenderer);