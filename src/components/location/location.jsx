import React from "react";
import "./location.css"

const location = () => {

    return(
        <div className="location">
            <div className="line"></div>
            <a href="http://www.brownfamilyhomestead.com/" target={"_blank"} rel="noreferrer">
                <button className="location-button">
                    View Location
                </button>
            </a>
            <div className="line"></div>
        </div>
    );

}

export default location;