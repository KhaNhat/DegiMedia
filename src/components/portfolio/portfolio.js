import React, { Component } from "react";
import Slider from "react-slick";
import Style from './portfolio.module.scss'
export default class Responsive extends Component {
    render() {
      var settings = {
        dots: true,
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000,
              pauseOnHover: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000,
              pauseOnHover: true,
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000,
              pauseOnHover: true,
            }
          }
        ]
      };
      return (
        <div className={Style.portflo}>
          <div className={`wow animate__animated animate__fadeInLeft ${Style.port_heading}`}>
          <div className="containerMe mx-auto">
              <h6>Our Portofolio</h6>
              <h4>See Our Recent <span>Projects</span></h4>
              <div className={Style.line}></div>
          </div>
          </div>
          <Slider {...settings}>
            {
                [1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15].map((item,index)=>{
                   return(<div key={index}>
                     <div className={Style.poritem}>
                       <img className="w-full" src={`https://templatemo.com/templates/templatemo_568_digimedia/assets/images/portfolio-0${item <=4 ? item: item%5 ==0 ? 1:item%5}.jpg`} />
                       <h4 className="text-xl font-bold mb-2 pt-5">Website Builder</h4>
                       <span className="text-gray-400 text-base pb-5 block">Marketing</span>
                      </div>
                   </div>)
                })
            }
          </Slider>
        </div>
      );
    }
  }
