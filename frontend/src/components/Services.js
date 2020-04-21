import React from 'react'
import axios from 'axios'
import ServiceCard from './ServiceCard'
import Dropbox from './Dropbox'
import auth from '../lib/auth'
import { Link } from 'react-router-dom'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: [],
      filteredCategories: null,
      dropDownOption: '',
      choices: []
    }
  }

  componentDidMount() {
    axios
      .get(('/api/appointments/category/'), { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then((res) => {
        this.setState({
          category: res.data,
          filteredCategories: res.data
        })
      })
      .catch((error) => console.error(error))
  }

  handleDropdown(event) {
    this.setState({ dropDownOption: event.target.value })

    if (event.target.value === 'Search All') {
      this.setState({ filteredCategories: this.state.category })
    } else {
      const onlyDropdownSelected = this.state.category.filter((service) => {
        if (
          service.category.toLowerCase() === event.target.value.toLowerCase()
        ) {
          // console.log(service.services)
          return event.target.value
        }
      })
      this.setState({ filteredCategories: onlyDropdownSelected })
    }
  }

  handleChange(event) {
    const choices = this.state.choices
    if (event.target.checked === true) {
      choices.push(event.target.value)
      this.setState({ choices })
    } else {
      const newchoices = choices.filter(choice => {
        return choice !== event.target.value
      })
      this.setState({ choices: newchoices })
    }
    console.log('choices: ' + choices)
  }

  render() {
    console.log(this.state.category)

    if (!this.state.filteredCategories) return <p> Waiting</p>

    return (
      <div className="servicePage">
        <div className="serviceFlex">
          <div className="serviceWrap">
            <Dropbox handleDropDown={() => this.handleDropdown(event)} />
            <Link to={{
              pathname: '/bookings',
              state: this.state.choices
            }}>Click Me</Link>
            <div className="columns is-full-mobile is-multiline is-centered mobile-padding">
              {this.state.filteredCategories.map((services, index) => {
                // console.log(this.state.filteredCategories)
                return (
                  <div key={index} className="correct">
                    <ServiceCard handleChange = {(event) => this.handleChange(event)} {...services} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
