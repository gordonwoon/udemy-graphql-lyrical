import React, { Component } from 'react'
import mutation from '../mutations/like-lyric';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({
      variables: {
        id
      }
    })
  }
  renderList() {
    const { lyrics = [] } = this.props;
    return lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
        <i
          className="material-icons clickable"
          onClick={() => this.onLike(id)}
        >
          thumb_up
        </i>
        {likes}
        </div>
      </li>
    ))
  }
  render() {
    return (
      <ul className="collection">
        {this.renderList()}
      </ul>
    )
  }
}

export default graphql(mutation)(LyricList);