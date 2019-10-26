import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }
  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      }
    });
  }
  render() {
    return (
      <div>
        <div>Create a New Song</div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
