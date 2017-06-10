import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    })
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapPropsToState(state) {
  return { posts: state.posts };
}

export default connect(mapPropsToState, { fetchPosts })(PostsIndex);
