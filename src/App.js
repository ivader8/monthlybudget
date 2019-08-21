import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux'
import './index.css';


import Navbar from './components/Navbar';
import NextMonth from './components/NextMonth'
import Home from './components/views/home';
import CurrentMonth from './components/views/currentMonth';
import Footer from './components/Footer';



class App extends Component {
  render() {

    return (
      <Provider store={store}>

        {/* TODO make sure about container classnames */}
        <BrowserRouter>
          <Fragment>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/nextMonth" component={NextMonth} />
              <Route path="/currentMonth" component={CurrentMonth} />
            </Switch>
            <Footer />
          </Fragment>
          

        </BrowserRouter>
      </Provider>
    )
  }
}




export default App;

