import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

import auth from '../lib/auth'

const Profile = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/api/profile', { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then((resp) => {
        setData(resp.data)
      })
      .catch(error => console.error(error))
  }, [])

  if (!data) {
    return null
  }

  return <div className="main-container">{console.log(data)}
    <div className="columns">
      <div className="column is-half">
        <h1 className="title is-1 is-title-light">{data.first_name} {data.last_name}</h1>
        <hr />

        {/* <figure className="image is-4by3">
          <img src={profile.user.image} alt={name} className="image" />
        </figure> */}

        <div className="column" >
          <div className="details">
            <p> Username: {data.username}</p>
            <p> Age: {data.age}</p>
            <p> Email: {data.email}</p>
            <p> Phone number: {data.phone_number}</p>

            <div>
              {data.appointments.map(profile =>
                <div key={profile}>{profile.appointment_date}</div>
              )}
            </div>

            <a>Reset Password!</a>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default Profile

