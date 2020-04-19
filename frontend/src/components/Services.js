import React from 'react'
import axios from 'axios'
import ServiceCard from './ServiceCard'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    axios
      .get('/api/appointments/category/')
      .then((res) =>
        this.setState({
          categories: res.data,
          services: res.data
        })
      )
      .catch((error) => console.error(error))
  }

  render() {
    const category = this.state.categories
    // console.log(category)
    return (
      <>
        <div className="servicePage">
          <div className="serviceFlex">
            {category.map((categories, i) => {
              return (
                <div key={i}>
                  <h1 className="categoryTitle">{categories.category}</h1>
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
