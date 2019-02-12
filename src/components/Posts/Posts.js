import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { deletePost } from '../../actions';
import classes from './Post.module.scss';

function Posts({ posts, onDelete }) {
  if(!posts.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
    <div className = {classes.Posts}>
      {posts.map(post => {
        return (
          <Post post={ post } onDelete={ onDelete } key={ post._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);