import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './style.scss'

const tabs = [
    {id:1,title:'首页',icon:'iconfont icon-shouye-',path:'/home'},
    {id:2,title:'发现',icon:'iconfont icon-faxian',path:'/found'},
    {id:3,title:'我的',icon:'iconfont icon-weibiaoti2fuzhi12',path:'/mine'}
]
export default class tabBar extends Component {
    render() {

        return (

                <nav className="border-top tabs">
                    {
                        tabs.map(item=>(
                            <NavLink className="tab" key={item.id} to={item.path}>
                                <span className={item.icon}> </span>
                                <span className="text">{item.title}</span>
                            </NavLink>
                        ))
                    }
                </nav>
            
        )
    }
}
