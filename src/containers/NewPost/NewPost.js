import React from 'react';
import classes from './NewPost.module.scss';

class NewPost extends React.Component {
  state = {
    title: '',
    body: '',
    showForm: false
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      this.resetHandler();
    }
  };

  resetHandler = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  showFormHandler = () => {
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    return (
      <>
        <p className={classes.show} onClick = {this.showFormHandler}>Leave your history here...</p>
        <div className = {classes.NewPost} style={{display: this.state.showForm ? "flex":"none"}}>
          <form onSubmit={ this.submitHandler } autoComplete="off">
              <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={ this.inputChangeHandler }
              value={ this.state.title }
            />
            <textarea
              rows = "10"
              cols = "30"
              placeholder="Write something cool!"
              name="body"
              onChange={ this.inputChangeHandler }
              value={ this.state.body }
              >
            </textarea>
       
            <div className = {classes.controls}>
                <button type="submit" className={classes.submit}>Add Post</button>
                <button type="button" className={classes.reset} onClick={ this.resetHandler }>
                Clear
                </button>
            </div>
        </form> 
        </div>
        </>
    );
  }
}

export default NewPost;