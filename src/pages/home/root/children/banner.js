import React, { Component } from 'react'

//引入swiper
import Swiper from 'swiper' 
import 'swiper/css/swiper.css' 

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="swiper-container" ref="banner">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={require("../../../../assets/homeBan1.jpg")} alt="img"/>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("../../../../assets/homeBan2.jpg")} alt="img"/>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("../../../../assets/homeBan3.jpg")} alt="img"/>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("../../../../assets/homeBan4.jpg")} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.swiper = new Swiper(this.refs.banner, {
            loop:true,
            autoplay: {
                disableOnInteraction: false,
                delay:2000
            },
          });
    }
}
