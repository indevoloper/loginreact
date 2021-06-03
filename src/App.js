import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Login from './components/Login'
import {AuthProvider} from './components/Auth'
import DashBoard from './components/Dashboard'

function App() {
  

  return (

    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component = {Login}/>
          <Route exact path="/dashboard" component = {DashBoard}/>
          
        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
