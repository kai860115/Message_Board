const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  content: {
    type: String,
    required: true
  }
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;