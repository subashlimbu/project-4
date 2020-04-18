import React from 'react'
import axios from 'axios'

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
          categories: res.data
        })
      )
      .catch((error) => console.error(error))
  }

  render() {
    console.log(this.state.categories)
    const category = this.state.categories
    console.log(category)
    return (
      <>
        <div>
          <div>
            {category.map((x) => {
              return <h1>{x.category}</h1>
            })}
          </div>
        </div>
      </>
    )
  }
}
export default Services
