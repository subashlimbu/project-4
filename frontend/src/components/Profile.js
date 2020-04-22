import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

import auth from '../lib/auth'

const Profile = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/api/profile', { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then((resp) => {
        // console.log(resp.data)
        setData(resp.data)
      })
      .catch( error => console.error(error))
  }, [])


  if (!data) {
    return null
  }
    
  
  return  <div>
    {/* {console.log(data)} */}
    
    <h1>Username: {data.username}</h1>
    <h1>Email: {data.email}</h1>
    <h1>First Name: {data.first_name}</h1>
    <h1>Last Name: {data.last_name}</h1>
    <h1>Age: {data.age}</h1>
    <h1>Phone Number: {data.phone_number}</h1>
    <h1>{console.log(data.appointments)}</h1>
    
    {data.appointments.map((e, i) => {
      // console.log(e.services)
      <div key={i}>{e.appointment_date}</div>
      return  (
        
        e.services.map((services, index) => {
          console.log(services.service_name)
          return <div key={index}>  <p>{services.service_name}</p>  </div>
  
        }))
     


    })}


    {data.appointments.map((e, i) => {
      // console.log(e.services)
      
      return  <div key={i}>{e.appointment_date}</div>
        
    })}
      
  </div>
    

}

export default Profile