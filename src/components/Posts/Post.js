import React from 'react';
import classes from './Post.module.scss';

export default ({ post: { title, body, _id }, onDelete }) => {
  return (
    <div className={classes.Post}>
    <div>
      <h2>{ title }</h2>
      <p>{ body }</p>
      </div>
      <button onClick={() => onDelete(_id)}>
        <span> &#10060;</span>
      </button>
    </div>
  );
};