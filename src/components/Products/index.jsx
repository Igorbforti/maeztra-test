import React from "react"

import Slider from "react-slick"

import "./style.css"

import shelfImg1 from "../../assets/images/clothes1.svg"
import shelfImg2 from "../../assets/images/clothes2.svg"

const Products = () => {
    
    const settings= {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        arrows: true,
        slidesToScroll: 5,
        className: "shelf",
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
            }
        ]
    };

    const shelfs = [
        {
            url: shelfImg1,
            price: "R$ 320,00",
            name: 'shelfRuched Rose Print Mini Skirts',
            description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
            link: "#"
        },
        {
            url: shelfImg2,
            price: "R$ 500,00",
            name: 'Faux Suede Mini Skirt',
            description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
            link: "#"
        },
        {
            url: shelfImg1,
            price: "R$ 320,00",
            name: 'Ruched Rose Print Mini Skirt',
            description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
            link: "#"
        },
        {
            url: shelfImg2,
            price: "R$ 500,00",
            name: 'Faux Suede Mini Skirt',
            description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
            link: "#"
        },
        {
            url: shelfImg1,
            price: "R$ 320,00",
            name: 'Ruched Rose Print Mini Skirt',
            description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
            link: "#"
        }
    ]

    return (
        <Slider {...settings}>
            {shelfs.map((shelf) => {
                return (
                    <div className="shelf-box">
                        <img src={shelf.url} alt="" />
                        <div className="color-container">
                                <div className="color1"></div>
                                <div className="color2"></div>
                                <div className="color3"></div>
                                <div className="color4"></div>
                        </div>
                        <div>
                            <span className="shelf-price">{shelf.price}</span>
                        </div>
                        <div>
                            <span className="shelf-name">{shelf.name}</span>
                        </div>
                        <p className="shelf-description">{shelf.description}</p>
                        <a href={shelf.link} className="shelf-button">Adicionar</a>        
                    </div>
                )
            })}
        </Slider>
    )
}

export default Products