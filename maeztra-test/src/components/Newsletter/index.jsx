import React from "react"

import "./style.css"

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <div>
                <h2 className="newsletter-title">Recebe Nossa Newsletter</h2>
            </div>
            <div className="newsletter-input-container">
                <input type="search" placeholder="Digite seu e-mail" className="newsletter-input" />
                <input type="submit" value="Enviar" className="newsletter-button" />
            </div>
        </div>
    )
}

export default Newsletter