import React from "react"

import "./style.css"

import facebook from "../../assets/images/facebook.svg"
import linkedin from "../../assets/images/linkedin.svg"
import instagram from "../../assets/images/instagram.svg"
import youtube from "../../assets/images/youtube.svg"
import visa from "../../assets/images/visa.svg"
import mastercard from "../../assets/images/mastercard.svg"
import poweredBy from "../../assets/images/powered-by.svg"
import poweredByMaeztra from "../../assets/images/powered-by-maeztra.svg"

const Footer = () => {
    return window.innerWidth > 768 ? (
        <div>
            <div className="footer-container">
                <div className="footer-box">
                    <h3 className="footer-title">Informações</h3>
                    <a href="#" className="footer-link">Quem Somos</a>
                    <a href="#" className="footer-link">Prazo de Envio</a>
                    <a href="#" className="footer-link">Trocas e Devoluções</a>
                    <a href="#" className="footer-link">Promoções e Cupons</a>
                </div>
                <div className="footer-box">
                    <h3 className="footer-title">Minha Conta</h3>
                    <a href="#" className="footer-link">Minha Conta</a>
                    <a href="#" className="footer-link">Meus Pedidos</a>
                    <a href="#" className="footer-link">Cadastre-se</a>
                </div>
                <div className="footer-box">
                    <h3 className="footer-title">Onde nos Encontrar</h3>
                    <a href="#" className="footer-link">Lojas</a>
                    <a href="#" className="footer-link">Endereço</a>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="bottom-footer-box">
                    <a href="#" className="social-media"><img src={facebook} alt="" /></a>
                    <a href="#" className="social-media"><img src={linkedin} alt="" /></a>
                    <a href="#" className="social-media"><img src={instagram} alt="" /></a>
                    <a href="#" className="social-media"><img src={youtube} alt="" /></a>
                </div>
                <div className="bottom-footer-box">
                    <img src={visa} alt="" className="payment-method" />
                    <img src={mastercard} alt="" className="payment-method" />
                    <img src={visa} alt="" className="payment-method" />
                    <img src={mastercard} alt="" className="payment-method" />
                </div>
                <div className="bottom-footer-box">
                    <img src={poweredBy} alt="" className="powered-by" />
                    <img src={poweredByMaeztra} alt="" />
                </div>
            </div>
        </div>
    ) : (
        <div>
            <div className="footer-container">
                    <a href="#" className="footer-title">Informações</a>
                    <a href="#" className="footer-title">Minha Conta</a>
                    <a href="#" className="footer-title">Onde nos Encontrar</a>
            </div>
            <div className="bottom-footer">
                <div className="bottom-footer-box">
                    <a href="#" className="social-media"><img src={facebook} alt="" /></a>
                    <a href="#" className="social-media"><img src={linkedin} alt="" /></a>
                    <a href="#" className="social-media"><img src={instagram} alt="" /></a>
                    <a href="#" className="social-media"><img src={youtube} alt="" /></a>
                </div>
                <div className="bottom-footer-box">
                    <img src={visa} alt="" className="payment-method" />
                    <img src={mastercard} alt="" className="payment-method" />
                    <img src={visa} alt="" className="payment-method" />
                    <img src={mastercard} alt="" className="payment-method" />
                </div>
                <div className="bottom-footer-box">
                    <img src={poweredBy} alt="" className="powered-by" />
                    <img src={poweredByMaeztra} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer