import React from 'react';
import 'bulma';
// import './style.scss';

export default class count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 5
    }
  }

  render() {
    let count = this.state.count
    return (
      <div className='countDown'>
        <h1>{count}</h1>
        <div>
          <button onClick={() => this.up()}> + </button>
          <button onClick={() => this.down()}> - </button>
          <button onClick={() => this.reset()}> reset </button>
        </div>
      </div>
    )
  }

  down() {
    let count = this.state.count
    if (count > 0) {
      this.setState({ count: count - 1 })
    }
  }
  up() {
    let count = this.state.count
    this.setState({ count: count + 1 })
  }
  reset() {
    this.setState({
      count: 5
    })
  }

}