import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'


class Booking extends React.Component {
  constructor() {
    super()
    this.state = {
      appointments: [],
      appointment_date: ''
    }
  }
  componentDidMount(){
    
    axios.get(('/api/appointments/'), { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(res => this.setState({ appointments: res.data }))
    
  }

  handleChange(event){
    // console.log(event.target)
    const { name, value } = event.target
    const data = { ...this.state.appointments.appointment_date, [name]: value }
    this.setState({ data })
  }
  
  
  handleSubmit(event){
    event.preventDefault()
    axios.post('/api/appointments/',
      this.state.appointments[0].appointment_date)
  }


  // console.log(this.state.appointments)

  render(){
    // console.log(this.state.appointments.slice(-1)[0])
    if (this.state.appointments.length === 0 ) {
      return null
    }
    const lastElement = this.state.appointments.slice(-1)[0]
    // console.log(lastElement.services)

    return <div> 
      <h1>Appointment date: {lastElement.appointment_date}</h1> 
      <div>Services:{lastElement.services.map((elem, index) =>{
        return   <div key={index}>{elem.service_name} {elem.private_price}</div> 
      })}</div>
      <div> 
        To Pay:
        <div>{lastElement.services.reduce((acc, element ) =>{
          return  acc + parseFloat(element.private_price)
        }, 0)}</div> 
        
      </div>  

      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input onChange={(event) => this.handleChange(event)} name='appointment_date' type="datetime-local"/>
        <input type="submit"/>
      </form>
    </div> 
       

    
     
  
  }



}

export default Booking