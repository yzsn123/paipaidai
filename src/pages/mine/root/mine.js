import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import './mine.scss'
import IScroll from '@/components/iscroll/iscroll'

import { connect } from 'react-redux'

import Banner from '../../home/root/children/banner'
class Mine extends PureComponent {
    render() {
        //判断是否登录成功
        if (localStorage.getItem('login') && localStorage.getItem('login') === 'true') {
            return (
                <div className="mine page" >
                    <IScroll>

                        <div className="head">
                            {/*用户头像*/}
                            <div className="userImg">
                                <span></span>
                                <em>159****9762</em>
                            </div>
                            {/*实名认证*/}
                            <div className="real" onClick={() => {
                                this.props.changeIdPath('/mine')
                                this.props.isIdentify || this.props.history.push('/mine/id')
                            }}>
                                <img alt="real" src={require('@/assets/mine_03.jpg')} />
                                {this.props.isIdentify ?
                                    (<span>实名认证成功</span>) :
                                    <span>实名信息缺失，<em>请立即补充</em></span>
                                }
                            </div>

                            <div className="money">
                                {/*获取额度*/}
                                <div className="limit">
                                    <h3>可用额度(元)</h3>
                                        {/* 如果获取到了额度显示额度 */}
                                        {this.props.isLoan ? (
                                            <div>
                                                <h2>￥20000</h2>
                                            </div>
                                        ) : (
                                            <div>
                                                <h2>暂未获得额度</h2>
                                                <em onClick={this.loanAction.bind(this)}>获取额度</em>
                                            </div>

                                        )}
                                </div>
                                {/*待还，借款....*/}
                                <ul>
                                    <li>
                                        <span className="iconfont icon-dingdan"> </span>
                                        <em>我的待还</em>
                                    </li>
                                    <li onClick={() => this.props.history.push('/mine/borrowHistory')}>
                                        <span className="iconfont icon-jilu"> </span>
                                        <em>借款记录</em>
                                    </li>
                                    <li>
                                        <span className="iconfont icon-youhuiquan"> </span>
                                        <em>优惠券</em>
                                    </li>
                                    <li>
                                        <span className="iconfont icon-tixian"> </span>
                                        <em>充值提现</em>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="mineContent">
                            <div className="mineAdd">
                                <img alt="add" src={require('@/assets/mine_07.jpg')} />
                                <div className="message">
                                    <h3>关注微信立即提额<em>抽红包</em></h3>
                                    <p>限时领取，最高可提额20000元</p>
                                </div>
                                <span>关注</span>
                            </div>
                            {/*福利专区*/}
                            <div className="welfare">
                                <h3>福利专区</h3>
                                <ul>
                                    <li>
                                        <img alt="img" src={require('@/assets/mine_11.jpg')} />
                                        <span>万元免息</span>
                                    </li>
                                    <li>
                                        <img alt="img" src={require('@/assets/mine_13.jpg')} />
                                        <span>小镇青年</span>
                                    </li>
                                    <li>
                                        <img alt="img" src={require('@/assets/mine_15.jpg')} />
                                        <span>我要当首富</span>
                                    </li>
                                    <li>
                                        <img alt="img" src={require('@/assets/mine_17.jpg')} />
                                        <span>关注微信</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img alt="img" src={require('@/assets/mine_23.jpg')} />
                                        <span>万元还款金</span>
                                    </li>
                                    <li>
                                        <img alt="img" src={require('@/assets/mine_25.jpg')} />
                                        <span>借款攻略</span>
                                    </li>
                                    <li>
                                        <img alt="img" src={require('@/assets/mine_27.jpg')} />
                                        <span>办大额卡</span>
                                    </li>
                                    <li>
                                        <img alt="img" src={require('@/assets/mine_28.jpg')} />
                                        <span>幸运摇钱树</span>
                                    </li>
                                </ul>
                            </div>

                            {/*轮播图*/}
                            <div className="mineBanner">
                                <Banner />
                            </div>

                            <ul className="manage">
                                <li><span>银行卡管理</span><em>> </em></li>
                                <li onClick={() => {
                                    this.props.history.push('/mine/set')
                                }}><span>设置</span><em>> </em></li>
                            </ul>
                        </div>
                    </IScroll>
                </div>
            )
        } else {
            localStorage.setItem('path', this.props.location.pathname);
            return <Redirect to="/login" state="/mine" />;
        }

    }
    loanAction(){
        //如果认证了
        if(this.props.isIdentify){
            this.props.history.push('/home/loan');
        }
        //如果没有认证
        else{
            this.props.history.push('/mine/id');
            this.props.changeIdPath('/home/loan')
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isIdentify: state.Mine.isIdentify,
        isLoan: state.Home.isLoan
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeIdPath(path) {
            dispatch({
                type: 'changeIdPath',
                val: path
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Mine);

