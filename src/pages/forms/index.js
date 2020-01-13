import React from 'react';
import 'bulma';
import './style.scss';


class Forms extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      name: '',
      email: '',
      message: '',
      subject: '',
      agree: false,
      stateMgr: '',
      err: {
        name: '',
        email: ''
      }
    }
  }
  render() {
    return (
      <div className='myForm'>
        <div className="title">Form</div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" placeholder="Username" onChange={e => this.onIptChange(e, 'name')} value={this.state.name}
              onBlur={e => { this.vaildate('name') }} />
          </div>
          {this.state.err.name ? <p className="help is-danger">{this.state.err.name}</p> : ''}
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Email" onChange={e => this.onIptChange(e, 'email')} value={this.state.email}
              onBlur={e => { this.vaildate('email') }} />
          </div>
          {this.state.err.email ? <p className="help is-danger">{this.state.err.email}</p> : ''}
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="message" onChange={e => this.onIptChange(e, 'message')} value={this.state.message}></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select onChange={e => this.onIptChange(e, 'subject')} value={this.state.subject}>
                <option value=''>请选择</option>
                <option value='react'>react js</option>
                <option value='vue'>vue js</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" onChange={e => this.onIptChange(e, 'agree', 'checked')} checked={this.state.agree} /> I agree to the
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="stateMgr" value='Redux' onChange={e => this.onIptChange(e, 'stateMgr')} checked={this.state.stateMgr === 'Redux'} />Redux
            </label>
            <label className="radio">
              <input type="radio" name="stateMgr" value='MobX' onChange={e => this.onIptChange(e, 'stateMgr')} checked={this.state.stateMgr === 'MobX'} />MobX
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={() => this.onSubmit()}>Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light" onClick={() => this.reset()} >Reset</button>
          </div>
        </div>

      </div>
    )
  }
  onIptChange(e, filed, valueFiled) {
    let value = e.target[valueFiled || 'value'];
    this.setState({
      [filed]: value
    })
  }
  onSubmit() {
    console.log(this.state);
  }
  reset() {
    this.setState({
      name: '',
      email: '',
      message: '',
      subject: '',
      agree: false,
      stateMgr: ''
    })
  }
  vaildate(filed) {
    let error = this.state.err
    if (filed === 'name') {
      this.state.name ? error.name = '' : error.name = '请输入名称'
    }
    if (filed === 'email') {
      let re = /^[-\w]+@[-\w]+(\.[-\w]+)+$/
      if (this.state.email && re.test(this.state.email)) {
        error.email = ''
      } else {
        error.email = '请输入邮箱地址'
      }
    }
    this.setState({ err: error })
  }
}

export default Forms;


