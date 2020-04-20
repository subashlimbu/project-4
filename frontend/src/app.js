import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'


const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/register" component={Register}/> */}
      <Route path="/login" component={Login}/>
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)