import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'
//引入home页面样式
import './home.scss'
import {connect} from 'react-redux'
import Banner from './children/banner'
import Select from './children/select'
import Weal from './children/Weal'
import Culture from './children/Culture'

//封装好的iscroll
import IScroll from '@/components/iscroll/iscroll'


class Home extends Component {
    render() {
        return (
            <div className="home page">
                {/*首页头部*/}
                <div className="header">
                    <p>
                        <img src={require("@/assets/logo.jpg")} alt="logo"/>
                        <span>纽交所上市集团</span>
                    </p>
                    <span className="iconfont icon-weibiaoti-"> </span>
                </div>
                
                <div className="content" ref="content">
                <IScroll>
                    <div className="wrap">
                        {/*首页大图*/}
                        {/* <NavLink to="home"> */}
                            <img className="borrowImg" src={require("@/assets/home_03.jpg")} alt="img"
                                onClick={this.loanAction.bind(this)}
                            />
                        {/* </NavLink> */}
                        {/*首页选项*/}
                        <Select/>
                        
                        {/*轮播图*/}
                        <Banner/>
                    
                        {/*福利专区*/}
                        <h3>福利专区</h3>
                        <Weal/>

                        {/*企业文化*/}
                        <h3>企业文化</h3>
                        <Culture/>
                    
                        <p><em>i</em><span>拍拍贷不向学生借贷</span></p>
                    </div>
                </IScroll>
                </div>
            </div>  
        )
    }
    loanAction(){
        //如果认证了
        if(this.props.isIdentify){
            this.props.history.push('/home/loan')
        }
        //如果没有认证则
        else{
            //设置认证完要跳转的路径
            this.props.changeIdPath('/home/loan')
            this.props.history.push('/mine/id')
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isIdentify: state.Mine.isIdentify,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeIdPath(path){
            dispatch({
                type:'changeIdPath',
                val:path
            })
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

