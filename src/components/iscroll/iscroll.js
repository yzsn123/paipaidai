import React, { Component } from 'react'
import './style.scss'
//引入iscroll
// import IScroll from '../../lib/iscroll-probe'

let IScroll = window.IScroll;
export default class Iscroll extends Component {

    render() {
      
        return (
            <div className="iscroll-content" ref="iscrollContent">
                <div className="iscroll-wrap">
                    {this.props.children}
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.myIScroll = new IScroll(this.refs.iscrollContent,{
            mouseWheel: true,
            bounce: false,
            scrollbars: false,
            tap:true,
            click:true
        })
        this.myIScroll.on('beforeScrollStart',()=>{
            this.myIScroll.refresh();
        })
      }

}
