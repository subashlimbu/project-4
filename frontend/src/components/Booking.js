
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
            console.log(elem)
            return <div key={index}>
              <h1>{elem.service_name}</h1>
              <h1>{elem.private_price}</h1>
              
    
            </div>
          })}
          
        </div>
        <div>
          To Pay
          <div>{ element.services.reduce((acc, elem) => {
            return acc + parseFloat(elem.private_price)
          },0)}</div>
        </div>
      </div>

    } )}
  </div>




}



export default Booking