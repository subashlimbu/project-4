
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'


const Booking = () => {
  const [appointments, setData] = useState([])

  useEffect(() => {
    axios.get('/api/appointments/')
      .then((resp) => {
        setData(resp.data)
      })
  }, [])

  // console.log(appointments)
  
  

  return <div>
    { appointments.map((element, i) =>{
      // console.log(element.services)
      
      return <div key={i}>
        <h1>Appointment Date: {element.appointment_date}</h1>
        <div>
          Services:{element.services.map((elem, index) =>{
            // console.log(elem)
            const value = elem.private_price
            // console.log(value)

            return <div key={index}>
              <h1>{elem.service_name}</h1>
              <h1>{elem.private_price}</h1>
              {/* <div>{Object.values(value).reduce((acc, total) => {
                return acc + total
              },0)  }</div> */}
              <div>{ Object.values(value).reduce((acc, total) => {
                return acc += total
              },0)  }</div>
            </div>
          })}
        </div>
        <div>
          To Pay
        </div>
      </div>

    } )}
  </div>




}



export default Booking