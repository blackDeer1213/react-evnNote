import React, { Component } from 'react'
// 首先我们需要导入一些组件...
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Forms from './pages/forms';
import markDown from './pages/markDown'
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/forms' component={Forms} />
          <Route path='/markDown' component={markDown} />
        </div>
      </Router>
    )
  }
}