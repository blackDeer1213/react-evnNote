import React, { Component } from 'react'
import marked from 'marked'
import 'github-markdown-css'
import './style.scss'

class markDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markDown: '',
            markedHtml: ''
        }
        this.myRef = React.createRef();
    }
    componentDidMount() {
        let markDown = localStorage.getItem("markDownSave")
        if (markDown) {
            this.setState({ markDown })  //es6 markDown:markDown 可省略
        }

    }
    render() {
        let html = marked(this.state.markDown)
        return (
            <div>
                <ul className='icons'>
                    <li className='button iconfont icon-zitixieti' ></li>
                    <li className='button iconfont icon-xiahuaxian'></li>
                    <li className='button iconfont icon-liebiao'></li>
                    <li className='button iconfont icon-zitifont8' onClick={e => { this.onBold() }}></li>
                </ul>
                <div className='text'>
                    <textarea ref={this.myRef} className='gb textL' onChange={e => this.toMark(e)} value={this.state.markDown}></textarea>
                    <div className='gb textR  markdown-body' dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>
        )
    }
    toMark(e) {
        // let value = e.targe.value;
        this.setState({
            markDown: e.target.value
        })
        localStorage.setItem('markDownSave', e.target.value)
    }
    onBold(e) {
        let txt = this.myRef.current;
        let start = txt.selectionStart;
        let end = txt.selectionEnd;
        console.log(txt, start, end);
        let md = this.state.markDown;
        md = md.substring(0, start) + '**' + md.substring(start, end) + '**' + md.substring(end);
        this.setState({ markDown: md })
    }
}

export default markDown