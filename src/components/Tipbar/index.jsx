import React from "react"

import "./style.css"

import planet from "../../assets/images/planet-icon.svg"
import house from "../../assets/images/house-icon.svg"
import box from "../../assets/images/box-icon.svg"
import tag from "../../assets/images/tag-icon.svg"
import truck from "../../assets/images/truck-icon.svg"

import comma from "../../assets/images/comma.svg"
import melissa from "../../assets/images/melissa.svg"
import forever from "../../assets/images/forever21.svg"
import zara from "../../assets/images/zara.svg"
import annaTaylor from "../../assets/images/annataylor.svg"

import tipbarBrand from "../../assets/images/tipbar-brand.svg"

const Tipbar = () => {
    return window.innerWidth > 768 ? (
        <div>
            <h3 className="tipbar-section-title">Por que comprar na Maeztra?</h3>
            <div className="tipbar-container">
                <div className="tipbar-box">
                    <div>
                        <img src={planet} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Produtos importados</h4>
                        <span className="tipbar-summary">Produto de Alta Qualidade</span>
                    </div>
                </div>
                <div className="tipbar-box">    
                    <div>
                        <img src={house} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Estoque no Brazil</h4>
                        <span className="tipbar-summary">Produtos mais perto de você!</span>
                    </div>
                </div>
                <div className="tipbar-box">
                    <div>
                        <img src={box} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Trocas Garantidas</h4>
                        <span className="tipbar-summary">Trocas em até 48 horas, vejas as regras</span>
                    </div>
                </div>
                <div className="tipbar-box">
                    <div>  
                        <img src={tag} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Ganhe 5% off</h4>
                        <span className="tipbar-summary">Pagando à vista no Cartão</span>
                    </div>
                </div>
                <div className="tipbar-box">
                    <div>
                        <img src={truck} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Frete Grátis</h4>
                        <span className="tipbar-summary">Em compras acima de R$ 499,00</span>
                    </div>
                </div>
            </div>
            <h2 className="brand-section-title">Marcas Parceiras</h2>
            <div className="brand-section-container">
                <div className="brand-section-sub-container">
                    <img src={tipbarBrand} alt="" className="brand-image" />
                </div>
            </div>
        </div>
    ) : (
        <div>
            <h3 className="tipbar-section-title">Por que comprar na Maeztra?</h3>
            <div className="tipbar-container">
                <div className="tipbar-box">
                    <div>
                        <img src={planet} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Produtos importados</h4>
                        <span className="tipbar-summary">Produto de Alta Qualidade</span>
                    </div>
                </div>
                <div className="tipbar-box">    
                    <div>
                        <img src={house} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Estoque no Brazil</h4>
                        <span className="tipbar-summary">Produtos mais perto de você!</span>
                    </div>
                </div>
                <div className="tipbar-box">
                    <div>
                        <img src={box} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Trocas Garantidas</h4>
                        <span className="tipbar-summary">Trocas em até 48 horas, vejas as regras</span>
                    </div>
                </div>
                <div className="tipbar-box">
                    <div>  
                        <img src={tag} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Ganhe 5% off</h4>
                        <span className="tipbar-summary">Pagando à vista no Cartão</span>
                    </div>
                </div>
                <div className="tipbar-box">
                    <div>
                        <img src={truck} alt="" />
                    </div>
                    <div className="text-section">
                        <h4 className="tipbar-title">Frete Grátis</h4>
                        <span className="tipbar-summary">Em compras acima de R$ 499,00</span>
                    </div>
                </div>
            </div>
            <h2 className="brand-section-title">Marcas Parceiras</h2>
            <div className="brand-section-container">
                <div className="brand-section-sub-container">
                    <img src={comma} alt="" className="brand-image" />
                    <img src={melissa} alt="" className="brand-image" />
                    <img src={forever} alt="" className="brand-image" />
                    <img src={zara} alt="" className="brand-image" />
                    <img src={annaTaylor} alt="" className="brand-image" />
                </div>
            </div>
        </div>
    )
}

export default Tipbar