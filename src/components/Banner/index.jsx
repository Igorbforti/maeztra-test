import React from "react"
import Slider from "react-slick"

import bannerImg from '../../assets/images/banner.svg';
import bannerImgMobile from '../../assets/images/banner-mobile.svg';

import "./style.css"

const Banner = () => {

    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        className: "banner"
    };

    const photos =[
        {
            name: 'Photos 1',
            url: bannerImg,
            urlMob: bannerImgMobile
        },
        {
            name: 'Photos 2',
            url: bannerImg,
            urlMob: bannerImgMobile
        },
        {
            name: 'Photos 3',
            url: bannerImg,
            urlMob: bannerImgMobile
        },
        {
            name: 'Photos 4',
            url: bannerImg,
            urlMob: bannerImgMobile
        },
    ]

    return window.innerWidth > 768 ? (
        <div className="banner">
            <Slider {...settings}>
                {photos.map((photo) => {
                    console.log(photo)
                    return (<img src={photo.url} className="banner-image"/>)
                })}        
            </Slider>
        </div>
    ) : (
        <div className="banner">
            <Slider {...settings}>
                {photos.map((photo) => {
                    console.log(photo)
                    return (<img src={photo.urlMob} className="banner-image"/>)
                })}        
            </Slider>
        </div>
    )
}

export default Banner