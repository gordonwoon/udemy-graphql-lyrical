import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetch-songs";
import mutation from '../mutations/add-song';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }
  onSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query }]
      })
      .then(response => hashHistory.push("/"))
      .catch(error => alert(error));
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            autoFocus={true}
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default graphql(mutation)(SongCreate);
