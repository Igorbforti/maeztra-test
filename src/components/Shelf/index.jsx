import React from "react"

import "./style.css"

import Products from "../Products"

const Shelf = () => {
    return (
        <div className="shelf">
            <h2 className="shelf-title">As Mais Pedidas</h2>
            <Products />
        </div>
    )
}

export default Shelf