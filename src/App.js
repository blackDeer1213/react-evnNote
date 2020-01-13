import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Forms from './pages/forms';
import markDown from './pages/markDown'
import clock from './pages/clock'
import count from './pages/count'
import eveNote from './pages/eveNote'


import './style.scss'
import 'normalize.css'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'currentState': ''
    }
  }
  render() {
    return (
      <Router>
        <ul className='navbar columns' style={{ display: ("none" === this.state.currentState) ? "none" : "flex" }}>
          <li className='column'><Link to="/clock">clock</Link></li>
          <li className='column'><Link to="/count">count</Link></li>
          <li className='column'><Link to="/forms">forms</Link></li>
          <li className='column'><Link to="/markDown">markDown</Link></li>
          <li className='column' onClick={e => this.navHide()}><Link to="/eveNote">eveNote</Link></li>
        </ul>

        <div>
          <Route path='/clock' component={clock} />
          <Route path='/count' component={count} />
          <Route path='/forms' component={Forms} />
          <Route path='/markDown' component={markDown} />
          <Route path='/eveNote' component={eveNote} />

        </div>
      </Router>
    )
  }
  navHide() {
    this.setState({ 'currentState': 'none' })
  }
}