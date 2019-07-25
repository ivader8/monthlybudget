import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import NextMonth from './components/NextMonth'
import Home from './components/views/home';



class App extends Component {
  render() {

    return (

      <div className ="App">
        <BrowserRouter>
          <Fragment>
            <Navbar></Navbar>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/nextMonth" component={NextMonth} />
            </Switch>
          </Fragment>

        </BrowserRouter>



      </div>
    )
  }
}




export default App;

