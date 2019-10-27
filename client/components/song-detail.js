import React, { Component } from 'react';
import query from '../queries/fetch-song';
import { graphql } from 'react-apollo';
import LyricList from './lyric-list';
import LyricCreate from './lyric-create';

class SongDetail extends Component {
  renderSong() {
    const { data: { song = {} } } = this.props;
    const { title = '', lyrics = [] } = song;
    return (
      <div>
        <h5>{title}</h5>
        <ul className="collection">
          {lyrics.map(lyric => (
            <li key={lyric.id} className="collection-item">
              {lyric.content}
              <i className="material-icons clickable">thumb</i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  render() {
    const { data: { song = {} } } = this.props;
    if (!song) return (<div>Loading...</div>);

    const { title, lyrics } = song;
    return (
      <div>
        <h3>Song Detail</h3>
        <h5>{title}</h5>
        <LyricList lyrics={lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    )
  }
}

export default graphql(query, {
  options: props => ({
    variables: {
      id: props.params.id
    }
  })
})(SongDetail)