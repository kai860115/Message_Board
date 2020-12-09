import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Input from './components/Input'
import Posts from './components/Posts'
import { Container } from 'semantic-ui-react'
const axios = require('axios');

export default class App extends Component {
  state = { posts: [] }

  removePost = (id) => {
    axios.delete('/api/posts/' + id)
      .then(res => {
        const newPosts = this.state.posts.filter(e => e._id !== id);
        this.setState({
            posts: newPosts
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addPost = (content) => {
    axios.post('/api/posts', { content: content })
      .then(res => {
        this.setState({ posts: [...this.state.posts, res.data] })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then(res => {
        this.setState({
          posts: res.data
        })
        return this.state.events
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Container >
          <Navbar />
          <Input addPost={this.addPost} />
        </Container>
        <Container>
          <Posts removePost={this.removePost} posts={this.state.posts} />
        </Container>
      </div>
    )
  }
}


