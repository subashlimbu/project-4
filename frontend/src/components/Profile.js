import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import ServicesforProf from './ServicesforProf'
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
    
    
    {/* {   setTimeout(() => {
      {data.appointments.map((e, i) => {
        return <div key={i}>{e.appointment_date}</div>
      })} 
    }, 1000)  } */}


    {/* {data.appointments.map((elem) =>{
      if ( !data.appointments || !data.appointment_date ){
        return <div>waitin</div>
      }
      console.log(elem)
    })} */}
  
  
  
  </div>
    

  // console.log(data)
  // return <div>

  //   {data.map(profile => {
  //     console.log(profile)

  //     return <div key={profile.id} className="main-container">
  //       <div className="columns">
  //         <div className="column is-half">
  //           <h1 className="title is-1 is-title-light">{profile.user.first_name} {profile.user.last_name}</h1>
  //           <hr />

  //           <figure className="image is-4by3">
  //             <img src={profile.user.image} alt={name} className="image" />
  //           </figure>

  //           <div className="column" >
  //             <div className="details">
  //               <p> Username: {profile.user.username}</p>
  //               <p> Age: {profile.user.age}</p>
  //               <p> Email: {profile.user.email}</p>
  //               <p> Phone number: {profile.user.phone_number}</p>

  //               <a>Reset Password!</a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     // return <div key={profile.id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
  //     //   <div className="card">
  //     //     <div className="card-image">
  //     //       <figure className="image is-3by4">
  //     //         <img className="glyphicon glyphicon-home" src="{{profile.image.url}}" alt="image"/>
  //     //       </figure>
  //     //     </div>

  //     //     <div id="file-button-center" className="file is-light is-danger">
  //     //       <label className="file-label">
  //     //         <input className="file-input" type="file" name="resume" />
  //     //         <span className="file-cta">
  //     //           <span className="file-icon">
  //     //             <i className="fas fa-upload"></i>
  //     //           </span>
  //     //           <span className="file-label">
  //     //             Edit Picture
  //     //           </span>
  //     //         </span>
  //     //       </label>
  //     //     </div>

  //     //     <div className="card-content has-text-centered">
  //     //       <h1>First Name: {profile.user.first_name}</h1>
  //     //       <h1>Last Name: {profile.user.last_name}</h1>
  //     //       <h1>Username: {profile.user.username}</h1>
  //     //       <h1>Age: {profile.user.age}</h1>
  //     //       <h1>Email: {profile.user.email}</h1>
  //     //       <h1>Phone Number: {profile.user.phone_number}</h1>
  //     //       <h1>Client Type: {profile.user.user_type}</h1>
  //     //     </div>

  //     //     <div className="field is-grouped">
  //     //       <p className="control">
  //     //         <button className="button is-success">
  //     //           Save changes
  //     //         </button>
  //     //       </p>
  //     //       <p className="control">
  //     //         <button className="button is-danger">
  //     //           Cancel
  //     //         </button>
  //     //       </p>
  //     //     </div>

  //     //   </div>
  //     // </div>
  //   })}
  // </div>

}

export default Profile