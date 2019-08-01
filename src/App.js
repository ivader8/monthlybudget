import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux'
import './index.css';


import Header from './components/Header';
import Navbar from './components/Navbar';
import NextMonth from './components/NextMonth'
import Home from './components/views/home';
import CurrentMonth from './components/views/currentMonth';



class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Fragment>
              <Navbar></Navbar>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/nextMonth" component={NextMonth} />
                <Route path="/currentMonth" component={CurrentMonth} />
              </Switch>
            </Fragment>

          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}




export default App;

