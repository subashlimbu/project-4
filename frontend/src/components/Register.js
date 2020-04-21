import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'
// import { Link } from 'react-router-dom'


class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        age: '',
        phone_number: '',
        password: '',
        password_confirmation: ''
        // user_type: ''
      },
      errors: {}
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
      .then(res => console.log('response', res))
      .then(res => {
        console.log('hi')
        const token = res.data.token
        auth.setToken(token)
        this.props.history.push('/login')
      })
      // .then(() => this.props.history.push('/login'))
      .catch(error => {
        this.setState({ errors: error.response.data })
      })
  }

  render() {

    const { errors } = this.state
    // console.log(errors)

    return <section className="hero">
      <div className="hero-body ">
        <div className="container">

          <div className="column is-half">
            <div className="login-top">
              <h1 className="title">Register</h1>
              <hr className="login-hr" />
              <p className="subtitle">Please enter your details to register.</p>
            </div>
          </div>
      
          <div className="box column is-half">

            <form
              className="form has text-left"
              onSubmit={(event) => this.handleSubmit(event)}>
              <div className="field">
                <label className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    onChange={(event) => this.handleChange(event)}
                    type="text"
                    name="email"
                    className="input"
                  />
                </div>
                {errors.email && <small className="help is-danger">
                  {errors.email.message}
                </small>}
              </div>

              <div className="field">
                <label className="label">
                  Username
                </label>
                <div className="control">
                  <input
                    onChange={(event) => this.handleChange(event)}
                    type="text"
                    name="username"
                    className="input"
                  />
                </div>
                {errors.username && <small className="help is-danger">
                  {errors.username.message}
                </small>}
              </div>

              <div className="field">
                <label className="label">
                  First name
                </label>
                <div className="control">
                  <input
                    onChange={(event) => this.handleChange(event)}
                    type="text"
                    name="first_name"
                    className="input"
                  />
                </div>
                {errors.first_name && <small className="help is-danger">
                  {errors.first_name.message}
                </small>}
              </div>

              <div className="field">
                <label className="label">
                  Last name
                </label>
                <div className="control">
                  <input
                    onChange={(event) => this.handleChange(event)}
                    type="text"
                    name="last_name"
                    className="input"
                  />
                </div>
                {errors.last_name && <small className="help is-danger">
                  {errors.last_name.message}
                </small>}
              </div>

              <div className="field">
                <label className="label">
                  Age
                </label>
                <div className="control">
                  <input
                    onChange={(event) => this.handleChange(event)}
                    type="text"
                    name="age"
                    className="input"
                  />
                </div>
                {errors.age && <small className="help is-danger">
                  {errors.age.message}
                </small>}
              </div>

              <div className="field">
                <label className="label">
                  Phone number
                </label>
                <div className="control">
                  <input
                    onChange={(event) => this.handleChange(event)}
                    type="text"
                    name="phone_number"
                    className="input"
                  />
                </div>
                {errors.phone_number && <small className="help is-danger">
                  {errors.phone_number.message}
                </small>}
              </div>


              <div className="field">
                <label className="label">
                  Password
                </label>
                <div className="control">
                  <input
                    onChange={(event) => this.handleChange(event)}
                    type="password"
                    name="password"
                    className="input"
                  />
                </div>
                {errors.password && <small className="help is-danger">
                  {errors.password.message}
                </small>}
              </div>

              <div className="field">
                <label className="label">
                  Confirm your password
                </label>
                <div className="control">
                  <input
                    onChange={(event) => this.handleChange(event)}
                    type="password"
                    name="password_confirmation"
                    className="input"
                  />
                </div>
                {errors.password_confirmation && <small className="help is-danger">
                  {errors.password_confirmation.message}
                </small>}
              </div>
              <button className="button is-success is-large">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div>
      </div> */}
    </section>



    // return <div>
    //   <h2>Register</h2>
    //   <form onSubmit={(event) => this.handleSubmit(event)}>
    //     <label>Email</label>
    //     <input onChange={(event) => this.handleChange(event)} name="email" type="text"/>
    //     <label>Username</label>
    //     <input onChange={(event) => this.handleChange(event)} name="username" type="text"/>
    //     <label>First Name</label>
    //     <input onChange={(event) => this.handleChange(event)} name="first_name" type="text"/>
    //     <label>Last Name</label>
    //     <input onChange={(event) => this.handleChange(event)} name="last_name" type="text"/>
    //     <label>Age</label>
    //     <input onChange={(event) => this.handleChange(event)} name="age" type="number"/>
    //     <label>Phone Number</label>
    //     <input onChange={(event) => this.handleChange(event)} name="phone_number" type="number"/>
    //     <label>Password</label>
    //     <input onChange={(event) => this.handleChange(event)} name="password" type="password"/>
    //     <label>Confirm Password</label>
    //     <input 
    //       onChange={(event) => this.handleChange(event)} type="password" name="password_confirmation"/>
    //     {/* <label>User Type</label>
    //     <select value={this.state.user_type} onChange={(event) => this.handleChange(event)} name="user_type">
    //       <option value="Business">Business</option>
    //       <option value="Individual">Individual</option>
    //     </select> */}
    //     <button>Register</button>
    //   </form>
    // </div>


  }
}



export default Register