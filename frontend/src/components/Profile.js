import React, { useState, useEffect } from 'react'
import axios from 'axios'
import auth from '../lib/auth'

const Profile = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get('/api/profile', {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
      .then((resp) => {
        setData(resp.data)
        // console.log(data)
      })
      .catch((error) => console.error(error))
  }, [])

  if (!data) {
    return null
  }

  return (
    <div className="mainProfile">
      <div className="profileContainer">
        <div className="personalDetails">
          <h1 className="profileTitle">YOUR PERSONAL DETAILS</h1>
          <h1>Username: {data.username}</h1>
          <h1>Email: {data.email}</h1>
          <h1>First Name: {data.first_name}</h1>
          <h1>Last Name: {data.last_name}</h1>
          <h1>Age: {data.age}</h1>
          <h1>Phone Number: {data.phone_number}</h1>
        </div>
        <div className="profileAppointments">
          <h1 className="profileTitle">YOUR APPOINTMENTS</h1>
          <h1>Services:</h1>
          {data.appointments.map((e, i) => {
            return e.services.map((services, index) => {
              console.log(services.service_name)
              return (
                <div key={index}>
                  {' '}
                  <p>{services.service_name}</p>{' '}
                </div>
              )
            })
          })}
          <h1 className="profileTitle">Appoitment Date:</h1>
          {data.appointments.map((e, i) => {
            return <div key={i}>{e.appointment_date}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile
