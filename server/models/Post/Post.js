const mongoose = require('mongoose');

// Define collection and schema for Post
let Post = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);