import React, { Component } from 'react';

const API_URL = 'https://swapi.co/api/people';

export default class Users extends Component {
  state = {
    people: [],
    person: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(API_URL)
      .then(result => {
        return result.json();
      })
      .then(({ results }) => {
        this.setState({
          people: results,
          person: id ? results[+id - 1] : null
        });
      });
  }

  renderAllPeople = () => {
    return <ul>
      {this.state.people.map(
        person => (
          <li key={person.url}>
            {person.name}
          </li>
        )
      )}
    </ul>
  };

  render() {
    return !this.state.person ?
      <div>{this.renderAllPeople()}</div> : <h1>{this.state.person.name}</h1>;
  }
}