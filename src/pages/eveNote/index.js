import React, { Component } from 'react'
import './style.scss'
export default class eveNote extends Component {
    render() {
        return (
            <div className='main_body columns'>
                <div className="sec1">
                    <div>
                        <div className='iconfont icon-add-plus'></div>  
                        <span>新建笔记</span> 
                        </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="sec2"></div>
                <div className="sec3"></div>
            </div>
        )
    }
}
