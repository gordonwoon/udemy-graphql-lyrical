import React, { Component } from "react";
import { graphql } from "react-apollo";
import mutation from "../mutations/add-lyric";
import query from "../queries/fetch-song";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
        }
      })
      .then(response => this.setState({ content: "" }))
      .catch(error => alert(error));
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={e => this.setState({ content: e.target.value })}
        />
      </form>
    );
  }
}

export default graphql(mutation)(LyricCreate);
