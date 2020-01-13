import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Forms from './pages/forms';
import markDown from './pages/markDown'
import clock from './pages/clock'
import count from './pages/count'


import './style.scss'
export default class App extends Component {
  render() {
    return (
      <Router>
        <ul className='navbar columns'>
          <li className='column'><Link to="/clock">clock</Link></li>
          <li className='column'><Link to="/count">count</Link></li>
          <li className='column'><Link to="/forms">forms</Link></li>
          <li className='column'><Link to="/markDown">markDown</Link></li>
        </ul>

        <div>
          <Route path='/clock' component={clock} />
          <Route path='/count' component={count} />
          <Route path='/forms' component={Forms} />
          <Route path='/markDown' component={markDown} />

        </div>
      </Router>
    )
  }
}