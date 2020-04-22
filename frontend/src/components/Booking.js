import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'


class Booking extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        appointment_date: '',
        services: []

      },
      thiswontbeposted: []
      
    }
  }

  componentDidMount(){
    // console.log(this.props.location)
    const testArray = this.props.location.state.map((serviceObject)=>{
      return JSON.parse(serviceObject)
    }) 
    // axios.get('/api/appointments/', { headers: { Authorization: `Bearer ${auth.getToken()}` } })
    //   .then(res => this.setState({ appointments: res.data }))
    
    const servicesArray = []
    testArray.forEach((e)=>{
      servicesArray.push(e.id)
    })
    this.setState({ data: { services: servicesArray }  })
    
    this.setState({  thiswontbeposted: testArray  })   
  }

  handleChange(event){
    // console.log(event.target)
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    // console.log(data)
    this.setState({ data })
  }
  //1. Fileter trough this.state.data
  
  handleSubmit(event){
    event.preventDefault()
    
    axios.post('/api/appointments/', this.state.data, { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then( console.log('POST IS DONE'))
      .then( res => {
        this.props.history.push('/profile')
      })
      .catch( error => console.error(error))
      
    // console.log(this.state.appointments)
  }


  // console.log(this.state.appointments)
 
  render(){
    //you can parse an array, u cna only parse... 
    console.log(this.state.data)
    const mappedAppointments = this.state.thiswontbeposted

    return <div>{mappedAppointments.map((elem,index) => {
      return <div key={index}> <h1>{elem.service_name}</h1> 
        
      </div>
      
  
      // console.log(elem.service_name)
       
    })}
    
    <div> 
         To Pay:
      <div>{mappedAppointments.reduce((acc, element ) =>{
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