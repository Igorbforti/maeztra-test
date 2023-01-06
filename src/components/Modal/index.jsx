import React, { useEffect, useState } from "react"

import "./style.css"

import newsletterIcon from "../../assets/images/newsletter-mail-icon.svg"
import bgNewsletter from "../../assets/images/bg-newsletter.svg"

const Modal = () => {

    const [modal, setModal] = useState(true)

    const closeModal = () => setModal(!modal)

    return window.innerWidth > 768 ? (
        <>
            {modal && (
                <div className="modal-overlay">
                <div className="modal-window">
                    <div className="modal-container">
                        <button onClick={closeModal} className="back-link">Fechar</button>
                        <div className="modal-content">
                            <div className="modal-image">
                                <img src={bgNewsletter} alt="" />
                            </div>
                            <div className="modal-desc">
                                <img src={newsletterIcon} alt="" />
                                <span className="modal-title">Bem Vindo à MAEZTRA</span>
                                <span className="modal-text">Receba em Primeira mão</span>
                                <span className="modal-text-bold">desconto e ofertas exclusivas</span>
                                <input type="email" placeholder="Digite seu email" className="modal-input" />
                                <input type="submit" value="Enviar" className="modal-btn" />
                            </div>
                        </div>
                                
                    </div>
                </div>
            </div>
            )}
        </>
    ) : (
        <>
            {modal && (
                <div className="modal-overlay">
                <div className="modal-window">
                    <div className="modal-container">
                        <button onClick={closeModal} className="back-link">Fechar</button>
                        <div className="modal-content">
                            <div className="modal-desc">
                                <img src={newsletterIcon} alt="" />
                                <span className="modal-title">Bem Vindo à MAEZTRA</span>
                                <span className="modal-text">Receba em Primeira mão</span>
                                <span className="modal-text-bold">desconto e ofertas exclusivas</span>
                                <input type="email" placeholder="Digite seu email" className="modal-input" />
                                <input type="submit" value="Enviar" className="modal-btn" />
                            </div>
                        </div>
                                
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default Modal