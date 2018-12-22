import React, { Component } from "react";

import { ListGroup, ListGroupItem } from 'reactstrap';
import { getDataEntry } from '../utils/api';

class EntryRenderer extends Component {
  state = {
    list: [],
    loading: true,
    errMessage: null
  };

  componentDidMount() {
    const { entry } = this.props;

    getDataEntry(entry)
      .then(({ results }) => {
        this.setState({
          list: results,
          loading: false,
          errMessage: null
        })
      }, err =>
        this.setState({
          loading: false,
          errMessage: 'Some error occurs'
        })
      );
  }

  render() {
    const { list, loading, errMessage } = this.state;

    return (
      loading ?
        <h3>Loading</h3> :
        (errMessage ?
          <div>errMessage</div> :
        <ListGroup style={{ marginTop: 30 }}>
          {list && list.map(({ name, title }) => (
            <ListGroupItem key={name || title}>
              {name || title}
            </ListGroupItem>
          ))}
        </ListGroup>)
    );
  }
}

export default EntryRenderer;