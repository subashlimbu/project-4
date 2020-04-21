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
      filteredCategories: [],
      dropDownOption: ''
    }
  }
  componentDidMount() {
    axios
      .get('/api/appointments/category/')
      .then((res) =>
        this.setState({
          categories: res.data,
          filteredCategories: res.data
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
      this.setState({ filteredCategories: onlyDropdownSelected })
    }
  }

  render() {
    const category = this.state.categories
    const filtered = this.state.filteredCategories
    console.log('filter' + filtered)
    // console.log(category)

    return (
      <>
        <div className="servicePage">
          <div className="serviceFlex">
            <div className="dropdownDiv">
              {filtered.map((cat, i) => {
                return (
                  <div key={i}>
                    <Dropbox
                      {...cat}
                      handleDropdown={() => this.handleDropdown(event)}
                    />
                    console.log(cat)
                  </div>
                )
              })}
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
