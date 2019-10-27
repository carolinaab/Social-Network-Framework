import React, { Fragment, Component } from 'react';
import Home from './views/home/Home';
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { BrowserRouter as Router, Switch, Redirect, Link, useRouteMatch, useParams } from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
    return (
      <Login />
      // <Router basename={window.location.pathname || ''}>
      //   <Switch>
      //     <Router exact path="/" render={props => <Login />}> </Router>
      //     <Router exact path="/registro" render={props => <Register />}></Router>
      //   </Switch>

      // </Router>

    )
  }
}

export default App;