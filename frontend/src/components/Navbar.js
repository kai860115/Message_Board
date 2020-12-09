import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  render() {
    return (
      <Menu text>
        <Menu.Item header>Message Board</Menu.Item>
      </Menu>
    )
  }
}
