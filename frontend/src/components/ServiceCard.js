import React, { useState } from 'react'
import axios from 'axios'

const ServiceCard = ({ category, services, handleChange }) => {

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
                      onChange={handleChange}
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
