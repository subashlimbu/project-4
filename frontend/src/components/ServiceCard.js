import React, { useState } from 'react'
import axios from 'axios'

let choices = []

const ServiceCard = ({ category, services }) => {
  const [data, setChoices] = useState([])
  // const [newChoices, setNewChoices] = useState([])

  const handleChange = (event) => {
    if (event.target.checked === true) {
      choices.push(event.target.value)
      setChoices([choices])
    } else {
      const newchoices = choices.filter((choice) => {
        return choice !== event.target.value
      })
      choices = newchoices
    }
    console.log('choices: ' + choices)
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   axios.post('/api/appointments', { categories: this.state.categories }, { headers: { Authorization: `Bearer ${auth.getToken()}` } })
  //     .catch(err => this.setState({ errors: err.response.data.errors }))
  // }

  return (
    <section>
      <div
        className="column is-one-third-tablet is-half-mobile categoryAndService"
        id="toggle"
      >
        <div className="card serviceWrap">
          <div className="categoryTitle">{category} </div>
          <div className="serviceHeader">
            <h1 id="hsn" className="headerBorder">
              Service
            </h1>
            <h1 id="hdt" className="headerBorder">
              Delivery Time
            </h1>
            <h1 id="hp" className="headerBorder">
              Private & Business Prices
            </h1>
          </div>
          <br />
          <div>
            <div>
              {services.map((service, i) => {
                return (
                  <div key={i} className="serviceNameFlex">
                    <p id="sn" className="service">
                      {service.service_name}
                    </p>
                    <p id="dt" className="service">
                      {service.delivery_time}
                    </p>
                    <p id="pp" className="service">
                      £ {service.private_price}
                    </p>
                    <p id="bp" className="service">
                      £ {service.business_price}
                    </p>
                    {/* <input type="checkbox" name={service.service_name} id="x" /> */}
                    <input
                      onChange={(event) => handleChange(event)}
                      type="checkbox"
                      value={service.service_name}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCard
