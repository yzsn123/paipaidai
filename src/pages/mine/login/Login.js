import React, { PureComponent } from 'react'

import {connect} from 'react-redux'
import './Login.scss'


 class Login extends PureComponent {

    render() {
        console.log(this.props)
        return (
            <div className="login page">

                <div className="header">
                    <span className="iconfont icon-fanhui" onClick={this.backAction.bind(this)}> </span>
                </div>

                <div className="content">
                    <h2>欢迎使用拍拍贷</h2>
                    <p>请输入手机号码</p>
                    <div className="inp">
                        <input type="text" ref="tel"/>
                        <span onClick={()=>{
                            this.refs.tel.value = "";
                            //获取焦点
                            this.refs.tel.focus();
                        }}><em>x</em></span>

                    <p>请输入密码</p>
                    <div className="inp">
                        <input type="password" ref="psd" />
                    </div>
                    </div>
                    {/*点击按钮登录*/}
                    <button onClick={this.loginAction.bind(this)}>登录</button>
                </div>
            </div>)
    }

    loginAction(){

        let tel = this.refs.tel.value;
        let psd = this.refs.psd.value;

        if(tel && psd){
            //手机号码验证
            if(!(/^1[3456789]\d{9}$/.test(tel))){ 
                alert('请输入正确的手机号码')
            }else{
                //手机号码验证成功
                //如果有登录表且有该用户信息
                if(localStorage.getItem('user')){
                    let telTable = JSON.parse(localStorage.getItem('user'));
                    if(telTable[tel]){
                        if(telTable[tel] !== psd){
                            alert('密码错误');
                            return false;
                        }else{
                            localStorage.setItem('login','true');
                        }
                    }else{
                        //如果没有该用户
                        this.props.setUserInfo({tel,psd});
                    }
                }else{
                    //如果没有登录表
                    this.props.setUserInfo({tel,psd});
                }
                
                this.props.history.push(localStorage.getItem('path') || '/home')
            }
        }else{
            alert('输入不能为空')
        }
         
    }
    backAction(){
        this.props.history.goBack();
    }
}


const mapStateToProps = (state)=>{
    return {
        tel:state.Mine.tel,
        psd:state.Mine.psd
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
        setUserInfo(info){
            dispatch({
                type:'userInfo',
                val:info
            })
        }
      }
    }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
  
  