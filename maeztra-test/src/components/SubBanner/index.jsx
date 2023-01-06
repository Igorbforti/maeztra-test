import React from "react"

import "./style.css"

import subbanner from "../../assets/images/subbanner.svg"

const SubBanner = () => {
    return (
        <div className="subbanner-container">
            <div className="subbanner-text-container">
                <h1 className="subbanner-title">Lorem ipsum</h1>
                <p className="subbanner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
                </p>
            </div>
            <div className="subbanner-image-container">
                <img src={subbanner} alt="" className="image" />
            </div>
        </div>
    )
}

export default SubBanner