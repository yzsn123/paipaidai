import React, { PureComponent } from 'react'
import './Id.scss'
import One from '../../../identify/one/one'
export default class Id extends PureComponent {

   
    render() {

        return (
            <div className="Id page">
                <div className="header">
                    <span className="iconfont icon-fanhui" onClick={
                        ()=>{this.props.history.goBack()}
                    }></span>
                    <h3>实名认证</h3>
                </div> 
                <div className="content">
                    <One history={this.props.history}/>
                </div>
            </div>
        )
    }
}
