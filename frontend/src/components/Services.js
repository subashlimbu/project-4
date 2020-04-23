import React from 'react'
import axios from 'axios'
import ServiceCard from './ServiceCard'
import Dropbox from './Dropbox'
import auth from '../lib/auth'
import { Link } from 'react-router-dom'
import LoaderSpinner from './LoaderSpinner'

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
      .get('/api/appointments/category/')
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
      console.log(choices)
      this.setState({ choices })
    } else {
      const newchoices = choices.filter((choice) => {
        return choice !== event.target.value
      })
      this.setState({ choices: newchoices })
    }
  }

  render() {
    const isLoggedIn = auth.isLoggedIn()

    console.log(isLoggedIn)

    if (!this.state.filteredCategories)
      return (
        <p>
          {' '}
          <LoaderSpinner />
        </p>
      )

    return (
      <div className="servicePage">
        <div className="serviceFlex">
          <div className="serviceWrap">
            <Dropbox handleDropDown={() => this.handleDropdown(event)} />
            {isLoggedIn && (
              <Link
                to={{
                  pathname: '/bookings',
                  state: this.state.choices
                }}
              >
                <button className="button1">Book Now</button>
              </Link>
            )}
            <div className="columns is-full-mobile is-multiline is-centered mobile-padding">
              {this.state.filteredCategories.map((services, index) => {
                // console.log(this.state.filteredCategories)
                return (
                  <div key={index} className="correct">
                    <ServiceCard
                      handleChange={(event) => this.handleChange(event)}
                      {...services}
                    />
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
