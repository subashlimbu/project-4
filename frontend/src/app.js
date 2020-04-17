import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </HashRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)