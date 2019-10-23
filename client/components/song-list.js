import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  render() {
    const { songs = [] } = this.props;
    console.log(this.props);
    return (
      <div>
        {songs.map(song => <p>{song.title}</p>)}
      </div>
    )
  }
}

const query = gql`
  {
    songs{
      id
      title
    }
  }
`;

export default graphql(query)(SongList)