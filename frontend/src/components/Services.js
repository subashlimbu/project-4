import React from 'react'
import axios from 'axios'
import ServiceCard from './ServiceCard'
import Dropbox from './Dropbox'
import { Link } from 'react-router-dom'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      services: [],
      filteredServices: null,
      dropDownOption: ''
    }
  }
  componentDidMount() {
    axios
      .get('/api/appointments/category/')
      .then((res) =>
        this.setState({
          categories: res.data,
          services: res.data,
          filteredServices: res.data
        })
      )
      .catch((error) => console.error(error))
  }

  handleDropdown(event) {
    this.setState({ dropDownOption: event.target.value })
    if (!this.state.searchText) {
      //if only dropdown is used
      const onlyDropdownSelected = this.state.categories.filter((category) => {
        return category.includes(event.target.value)
      })
      this.setState({ filteredServices: onlyDropdownSelected })
    }
  }

  render() {
    const category = this.state.categories
    console.log(category)

    return (
      <>
        <div className="servicePage">
          <div className="serviceFlex">
            <div className="dropdownDiv">
              <Dropbox handleDropdown={() => this.handleDropdown(event)} />
              {/* {this.state.filteredServices.map((categories) => {
                console.log(categories.service_name)
              })} */}
            </div>
            {category.map((categories, i) => {
              return (
                <div key={i} id="correct">
                  <ServiceCard {...categories} />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}
export default Services
