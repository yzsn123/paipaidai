import React, { Component } from 'react'

export default class Weal extends Component {
    render() {
        return (
            <div className="weal">
                <div className="left">
                    <img alt="img" src={require("@/assets/weal_03.jpg")}/>
                </div>
                <div className="right">
                <img alt="img" src={require("@/assets/weal_05.jpg")}/>
                <img alt="img" src={require("@/assets/weal_08.jpg")}/>
                </div>
            </div>
        )
    }
}
