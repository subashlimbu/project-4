import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      }
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/login', this.state.data).then((res) => {
      const token = res.data.token
      console.log(token)
      auth.setToken(token)
      this.props.history.push('/services')
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Email</label>
          <input
            onChange={(event) => this.handleChange(event)}
            type="text"
            name="email"
          />
          <label>Password</label>
          <input
            onChange={(event) => this.handleChange(event)}
            type="password"
            name="password"
          />
          <button>Login</button>
        </form>
      </div>
    )
  }
}
export default Login
