import React from "react";
import "./registry.css"
import infoImage from "../../images/dance-beach.jpg";
import bouquetLower from "../../images/bouquet-2.png";

const registry = () => {
    return (
        <div className="registry-info">
            <div className="registry-information">
                <h1>Registry Details</h1>
                <p>For our registry, we have decided to go with a cash fund for our honeymoon. We both have been living on our own for a few years and have accrued most everything needed for a functional living space. The cash fund has options for specific activies on the honeymoon. </p>
                <p>
                    <a href="https://www.zola.com/registry/brianneandmark2023" target={"_blank"} rel="noreferrer">
                        <button className="registry-button">
                            Registry
                        </button>
                    </a>
                </p>
                <img className="bouquet-lower" src={bouquetLower} alt="" />
            </div>
            <div className="registry-picture-container">
                <img className="registry-picture" src={infoImage} alt=""/>
            </div>
        </div>
    );

}

export default registry;