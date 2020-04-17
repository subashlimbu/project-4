import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'

const App = () => (
  <HashRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </HashRouter>

)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)