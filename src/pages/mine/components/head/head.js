import React from 'react'
import './head.scss'
export default (props)=>{
        return (
            <div className="header Mine">
                <span className="iconfont icon-fanhui" onClick={() => {
                   props.history.goBack();
                }}> </span>
                <h3>{props.title}</h3>
            </div>
        )
}
