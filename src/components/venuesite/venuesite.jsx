import React from "react";
import "./venuesite.css"

const venuesite = () => {

    return(
        <div className="location">
            <div className="line"></div>
            <a href="http://www.brownfamilyhomestead.com/wedding-guest-info" target={"_blank"} rel="noreferrer">
                <button className="location-button">
                    Venue Website
                </button>
            </a>
            <div className="line"></div>
        </div>
    );

}

export default venuesite;