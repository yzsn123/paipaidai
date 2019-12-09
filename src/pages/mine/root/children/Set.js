import React, { PureComponent } from 'react'

import './set.scss'

import Head from '../../components/head/head'
import IScroll from '@/components/iscroll/iscroll'
export default class Set extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            pop:false
        }
    }
    render() {
        let Pop = (<div className="pop">
                        <div className="popBox">
                            <p>是否退出登录?</p>
                            <button className="cancel" onClick={()=>{
                                this.setState({
                                    pop:false
                                })
                            }}>取消</button>
                            <button className="confirm" onClick={()=>{
                                localStorage.setItem('login','false');
                                this.props.history.push('/home');    
                            }}>确定</button>
                        </div>
                    </div>)
        return (
            <div className="set page">
                <Head title="设置" history={this.props.history}/>

                <div className="content">
                    <IScroll>
                    <ul className="user">
                        <li>
                            <span>用户名</span>
                            <em></em>
                        </li>
                        <li>
                            <span>手机号</span>
                            <em>159****9762</em>
                        </li>
                    </ul>
                    <ul className="setSel">
                        <li><span>帮助中心</span><em>></em></li>
                        <li><span>关于我们</span><em>></em></li>
                        <li><span>订阅号</span><em>></em></li>
                        <li><span>用户服务协议</span><em>></em></li>
                        <li><span>用户隐私协议</span><em>></em></li>
                        <li><span>授权管理</span><em>></em></li>
                        <li><span>评价服务</span><em>></em></li>
                        <li onClick={()=>{
                            this.setState({
                                pop:true
                            })
                        }}><span>退出登录</span><em>></em></li>
                    </ul>

                    <p>当前版本v7.11.1.19111301</p>
                    </IScroll>
                </div>
                
                {this.state.pop ? Pop : ''}
                
            </div>
        )
    }
}
