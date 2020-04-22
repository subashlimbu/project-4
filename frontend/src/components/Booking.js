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

  componentDidMount() {
    // console.log(this.props.location)
    // console.log(appointments)


    // axios.get('/api/appointments/', { headers: { Authorization: `Bearer ${auth.getToken()}` } })
    //   .then(res => this.setState({ appointments: res.data }))
    // this.setState({ appointments: this.props.location.state })   
    this.setState({ appointments: this.props.location })
  }

  // handleChange(event){
  //   console.log(event.target)
  //   const { name, value } = event.target
  //   const data = { ...this.state.appointments.appointment_date, [name]: value }
  //   this.setState({ data })
  // }


  // handleSubmit(event){
  //   event.preventDefault()
  //   axios.post('/api/appointments/',
  //     this.state.appointments[0].appointment_date)
  // }


  // console.log(this.state.appointments)

  render() {
    console.log(this.state.appointments)
    // console.log(this.state.appointments.state.service_name)
    // console.log(this.state.appointments.state['service_name'])
    return <div>Hello</div>
    // return <div>{this.state.appointments}</div>

    // return <div> {this.state.appointments.map((element, i) =>{
    //   console.log(this.state.appointments[0].service_name)
    //   // console.log(element.services)

    //   return <div key={i}>
    //     <h1>Appointment Date: {element.appointment_date}</h1>
    //     <div>
    //       Services:{element.services.map((elem, index) =>{
    //         // console.log(elem)
    //         return <div key={index}>
    //           <h1>{elem.service_name}</h1>
    //           <h1>{elem.private_price}</h1>


    //         </div>
    //       })}

    //     </div>
    //     <div>
    //       To Pay
    //       <div>{ element.services.reduce((acc, elem) => {
    //         return acc + parseFloat(elem.private_price)
    //       },0)}</div>
    //     </div>

    //     <form onSubmit={(event) => this.handleSubmit(event)}>
    //       <input onChange={(event) => this.handleChange(event)} name='appointment_date' type="datetime-local"/>
    //       <input type="submit"/>
    //     </form>
    //   </div>

    // } )}
    // <div>

    // </div>
    // </div>


  }
}

export default Booking