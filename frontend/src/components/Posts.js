import React, { Component } from 'react'
import { Item, Icon } from 'semantic-ui-react'

class Posts extends Component {
  render() {
    return (
      <Item.Group divided>
        {this.props.posts.map((e) => (
          <Item key={e._id}>
            <Item.Content style={{textAlign: 'left'}} verticalAlign='middle'>{e.content}</Item.Content>
            <Icon onClick={() => this.props.removePost(e._id)} link name='close' />
          </Item>
        ))}
      </Item.Group>
    )
  }
}

export default Posts