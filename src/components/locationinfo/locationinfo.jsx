import React from "react";
import "./locationinfo.css"
import infoImage from "../../images/dance-beach.jpg";
// import bouquetLower from "../../images/bouquet-2.png";

const locationinfo = () => {
    return (
        <div className="location-info">
            <div className="location-information">
                <h1>Wedding Details</h1>
                <h3>Dressy Casual Attire</h3>
                <p>No dogs</p>
                <p>
                    <a href="http://www.brownfamilyhomestead.com/wedding-guest-info" target={"_blank"} rel="noreferrer">
                        Directions to the venue
                    </a>
                </p>
            </div>
            <div className="location-picture-container">
                <img className="location-picture" src={infoImage} alt=""/>
            </div>
        </div>
    );

}

export default locationinfo;