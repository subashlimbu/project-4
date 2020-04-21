import React from 'react'
import axios from 'axios'
import ServiceCard from './ServiceCard'
import Dropbox from './Dropbox'
// import { Link } from 'react-router-dom'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: [],
      filteredCategories: null,
      dropDownOption: ''
    }
  }
  componentDidMount() {
    axios
      .get('/api/appointments/category/')
      .then((res) =>
        this.setState({
          category: res.data,
          filteredCategories: res.data
        })
      )
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
  render() {
    console.log(this.state.category)

    if (!this.state.filteredCategories) return <p> Waiting</p>

    return (
      <div className="servicePage">
        <div className="serviceFlex">
          <div className="serviceWrap">
            <Dropbox handleDropDown={() => this.handleDropdown(event)} />

            <div className="columns is-full-mobile is-multiline is-centered mobile-padding">
              {this.state.filteredCategories.map((services, index) => {
                // console.log(this.state.filteredCategories)
                return (
                  <div key={index} className="correct">
                    <ServiceCard {...services} />
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
