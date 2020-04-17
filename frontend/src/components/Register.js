import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'


class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
      },
      erros: {}
    }
  }


  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/register',
      this.state.data)
      .then(() => this.props.history.push('/login'))
  }

  render() {
    return <div>
      <h2>Register</h2>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Email</label>
        <input onChange={(event) => this.handleChange(event)} name="email" type="text"/>
        <label>Username</label>
        <input onChange={(event) => this.handleChange(event)} name="username" type="text"/>
        <label>Password</label>
        <input onChange={(event) => this.handleChange(event)} name="password" type="password"/>
        <label>Confirm Password</label>
        <input 
          onChange={(event) => this.handleChange(event)} type="password" name="password_confirmation"/>
        <button>Register</button>
      </form>
    </div>
  }
}

export default Register