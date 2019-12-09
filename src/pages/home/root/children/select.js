import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        return (
            <ul className="select">
                <li>
                    <img src={require("@/assets/home_07.jpg")} alt="img"/>
                    <span>万元免息</span>
                </li>
                <li>
                    <img src={require("@/assets/home_09.jpg")} alt="img"/>
                    <span>优惠券</span>
                </li>
                <li>
                    <img src={require("@/assets/home_11.jpg")} alt="img"/>
                    <span>微信提额</span>
                </li>
                <li>
                    <img src={require("@/assets/home_13.jpg")} alt="img"/>
                    <span>送还款金</span>
                </li>
            </ul>
        )
    }
}
