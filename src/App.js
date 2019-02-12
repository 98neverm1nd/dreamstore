import React, { Component } from 'react';
import CreatePost from './containers/CreatePost/CreatePost';
import Posts from './components/Posts/Posts';
import classes from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Clocks from './components/Clocks/Clocks';

class App extends Component {
  render() {
    return (
      <div className = {classes.App}>
        <Header/>
        <CreatePost />
        <Posts/>
        <Footer/>
        <Clocks/>
      </div>
    );
  }
}

export default App;