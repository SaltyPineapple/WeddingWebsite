import React from "react";
import "./locationinfo.css"
import infoImage from "../../images/dance-beach.jpg";
// import bouquetLower from "../../images/bouquet-2.png";

const locationinfo = () => {
    return (
        <div className="location-info">
            <div className="location-information">
                <h1>Venue Details</h1>
                <h3>Brown Family Homestead</h3>
                <p>No dogs</p>
                <p>
                    <a href="http://www.brownfamilyhomestead.com/wedding-guest-info" target={"_blank"} rel="noreferrer">Directions</a>
                </p>
            </div>
            <div className="location-picture-container">
                <img className="location-picture" src={infoImage} alt=""/>
            </div>
        </div>
    );

}

export default locationinfo;