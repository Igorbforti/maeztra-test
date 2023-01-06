import React from "react"

import logo from "../../assets/images/logo.svg"
import logoMobile from "../../assets/images/logo-mobile.svg"
import searchMobile from "../../assets/images/search-mobile.svg"
import cartMobile from "../../assets/images/cart-mobile.svg"
import menuMobile from "../../assets/images/menu-mobile.svg"

import "./style.css"

const Header = () => { 
    return window.innerWidth > 768 ? (
        <header className="header">
            <div className="top-header">
                <span className="top-header-text">Acompanhe as melhores promoções disponíveis aqui na Maeztra.</span>
            </div>
            <div className="main-header">
                <div>
                    <img src={logo} alt="maeztra logo" />
                </div>
                <div className="search-bar-box">
                    <input type="search" placeholder="O Que Você Busca?" className="search-bar" />
                    <input type="submit" value="Buscar" className="search-button" />
                </div>
                <div className="nav-account-box">
                    <a href="https://google.com" className="my-account-link">Minha Conta</a>
                </div>
                <div className="nav-account-box">
                    <a href="https://google.com" className="my-favorite-link">Minha Conta</a>
                </div>
                <div className="nav-account-box">
                    <a href="https://google.com" className="my-minicart-link">Meu Carrinho</a>
                </div>
            </div>
            <div className="menu-header">
                <a href="https://google.com" className="menu-news">Novidades</a>
                <a href="https://google.com" className="menu-content">Vestidos</a>
                <a href="https://google.com" className="menu-content">Roupas</a>
                <a href="https://google.com" className="menu-content">Sapatos</a>
                <a href="https://google.com" className="menu-content">Lingerie</a>
                <a href="https://google.com" className="menu-content">Acessórios</a>
                <a href="https://google.com" className="menu-content">OUTLET</a>
            </div>
        </header>
    ) : (
        <header>
            <div className="top-header">
                <span className="top-header-text">Acompanhe as melhores promoções disponíveis aqui na Maeztra.</span>
            </div>
            <div className="main-header-mobile">
                <div className='nav-menu'>
                    <img src={menuMobile} alt="" />
                </div>
                <div className="header-mobile-logo">
                    <a href=""><img src={logoMobile} alt="" /></a>
                </div>
                <div className="mobile-search">
                    <a href=""><img src={searchMobile} alt="" /></a>
                </div>
                <div className="mobile-cart">
                    <a href=""><img src={cartMobile} alt="" /></a>
                </div>
            </div>
        </header>
    )
}

export default Header