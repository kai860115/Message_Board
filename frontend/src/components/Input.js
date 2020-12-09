import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class Input extends Component {
  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClick = () => {
    if (this.state.value !== '') {
      this.props.addPost(this.state.value)
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input width={15} placeholder='Write something' onChange={this.handleChange} value={this.state.value} />
          <Form.Button onClick={this.handleClick} >Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Input
