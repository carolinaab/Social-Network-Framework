import React, { Component } from 'react';
import './index.css'
import Login from '../src/views/login/Login'
import Home from '../src/views/home/Home'
// import Register from '../src/views/register/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../src/components/specific/navbar/Navbar'


class App extends Component {



  render() {
    return (
      <div>
        <main>
          <Switch >
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/Home" component={Home}></Route >
          </Switch>

        </main >
      </div>
    )
  }
}

export default App;

