import React from 'react'
import './BorrowHistory.scss'

import { connect } from 'react-redux'
import IScroll from '@/components/iscroll/iscroll'
import Head from '../../components/head/head'
function BorrowHistory(props){
        return (
            <div className="borrowHistory page">
                <Head title="借款记录" history={props.history}/>
            
                <div className="content">
                    <IScroll>
                       
                        <ul className="history">
                            { props.borrowHistory.length > 0 ?
                                props.borrowHistory.map((item)=>{
                                    return (
                                        <li key={item}>
                                            <h3>借款金额:</h3>
                                            <p>￥{item.money}</p>
                                            <h3>借款时间:</h3>
                                            <p>{item.time}</p>
                                        </li>
                                    )
                                }) : (
                                    <div className="noBorrow">
                                        <img src={require('@/assets/noBorrow.jpg')} alt=""/>
                                    </div>
                                )
                            }
                            
                        </ul>
                    </IScroll>
                </div>
            </div>
        )
}

const mapStateToProps = (state)=>{
    return {
        borrowHistory:state.Home.BorrowHistory,
        borrowMoney:state.Home.BorrowMoney
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BorrowHistory);
