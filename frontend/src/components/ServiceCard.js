import React from 'react'

const handleRemove = () => {
  const element = document.getElementById('toggle')
  element.classList.remove('toggleBox')
  console.log('bus')
}

const handleChange = () => {
  const element = document.getElementById('toggle')
  element.classList.add('toggleBox')
}

const ServiceCard = ({ services }) => {
  return (
    <section>
      <button onClick={handleChange}>Hide</button>
      <button onClick={handleRemove}>Show</button>

      <div
        className="column is-one-third-tablet is-half-mobile categoryAndService"
        id="toggle"
      >
        <div className="card serviceWrap">
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
                    <button></button>
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
