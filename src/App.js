import React, { Component } from 'react';
import './index.css'
import Login from '../src/views/login/Login'
// import Register from '../src/views/register/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {



  render() {
    return (
      <Router basename={window.location.pathname || ''} >
        <Switch >
          <Route exact path="/" render={props => < Login />}></Route>
          {/* <Route exact path="/registro" render={props => < Register />}></Route> */}
        </Switch>
      </Router>
    )
  }
}

export default App;

