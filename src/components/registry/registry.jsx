import React from "react";
import "./registry.css"
import infoImage from "../../images/dance-beach.jpg";
// import bouquetLower from "../../images/bouquet-2.png";

const registry = () => {
    return (
        <div className="registry-info">
            <div className="registry-information">
                <h1>Wedding Details</h1>
                <h3>Dressy Casual Attire</h3>
                <p>No dogs</p>
                <p>
                    <a href="http://www.brownfamilyhomestead.com/wedding-guest-info" target={"_blank"} rel="noreferrer">
                        Directions to the venue
                    </a>
                </p>
            </div>
            <div className="registry-picture-container">
                <img className="registry-picture" src={infoImage} alt=""/>
            </div>
        </div>
    );

}

export default registry;