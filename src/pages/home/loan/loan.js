import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import './loan.scss'

class Loan extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            isPop:false
        }
    }
    render() {
        return (
            <div className="loan page"> 
                <div className="header">
                    <span className="iconfont icon-fanhui"
                    onClick={()=>this.props.history.goBack()}></span>
                    <h3>获取额度</h3>
                </div>

                <div className="content">
                    <div className="limit">
                        <div className="limitHead"></div>
                        <div className="limitBox">
                            <h3>获得额度</h3>
                            <h2>￥20000</h2>
                            <img src={require('@/assets/loan.jpg')} alt=""/>
                            <button
                                onClick={()=>this.setState({
                                    isPop:true
                                })}
                            >立即借钱</button>
                        </div>
                    </div>
                    {this.state.isPop ? (
                        <div className="loanPop">
                            <div className="popBox">
                                <h3>借取额度</h3>
                                <p>
                                    <em>￥</em>
                                    <input type="text" ref={(inp)=>this.inp = inp}/>
                                </p>
                                <button onClick={this.loanAction.bind(this)}>立即借取</button>
                            </div>
                        </div>
                    ) : ''}

                </div>
                
            </div>
        )
    }
    loanAction(){
        let val = Number(this.inp.value);
        this.props.borrowAction(val);
        alert('借取成功');
        this.props.history.push('/home')
    }
    componentDidMount(){
        this.props.changeLoan();
    }
}
const mapStateToProps = (state)=>{
    return {
        BorrowMoney:state.Home.BorrowMoney
    }
}
const mapDispatchToProps = (dispatch)=>{

    return {
        borrowAction(val){
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let minu = date.getMinutes();
            let sec = date.getSeconds();
            dispatch({
                type:'BorrowMoney',
                val,
                time:`${year} / ${month} / ${day}  ${hour}:${minu}:${sec}`
            })
        },
        changeLoan(){
            dispatch({
                type:'changeLoan',
                val:true
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Loan);