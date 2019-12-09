import React, { Component } from 'react'

export default class Culture extends Component {
    render() {
        return (
            <ul className="culture">
                <li>
                    <img alt="img" src={require('@/assets/culture1.jpg')}/>
                    <span>纽约所上市</span>
                </li>
                <li>
                    <img alt="img" src={require('@/assets/culture2.jpg')}/>
                    <span>安全合规</span>
                </li>
                <li>
                    <img alt="img" src={require('@/assets/culture3.jpg')}/>
                    <span>信息披露</span>
                </li>
                <li>
                    <img alt="img" src={require('@/assets/culture4.jpg')}/>
                    <span>机构放款</span>
                </li>
            </ul>
        )
    }
}
