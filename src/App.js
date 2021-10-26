import React from 'react'
import WineList from './components/WineList'
import Home from './components/Home'
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
          <Route exact path="/wines" component={WineList}/>
          <Route exact path="/wines/:id" component={WineDetails}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
