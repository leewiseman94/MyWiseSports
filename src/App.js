import React from 'react'
import FootballHome from './components/FootballHome'
import Predictions from './components/Predictions'
import Home from './components/Scores'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WineDetails from './components/WineDetails'



const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/football" component={FootballHome}/>
          <Route exact path="/football/predictions" component={Predictions}/>
          <Route exact path="/wines/:id" component={WineDetails}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
