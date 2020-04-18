// Using Hooks Method
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Profile = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/appointments/')
      .then((resp) => {
        setData(resp.data)
      })
  }, [])

  console.log(data)
  return <div>
    <h1>Profile</h1>

  </div>

}

export default Profile