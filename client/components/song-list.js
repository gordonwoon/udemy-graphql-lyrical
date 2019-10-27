import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetch-songs";
import mutation from "../mutations/delete-song";

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(response => this.props.data.refetch())
      .catch(error => alert(error));
  }
  renderSongs() {
    const {
      data: { songs = [] }
    } = this.props;
    return songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i
            className="material-icons clickable"
            onClick={this.onSongDelete.bind(this, id)}
          >
            delete
          </i>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(mutation)(graphql(query)(SongList));
