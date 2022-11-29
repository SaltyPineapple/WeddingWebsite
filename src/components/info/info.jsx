import React from "react";
import "./info.css"
import infoImage from "../../images/piggy-back.jpg";
import bouquetUpper from "../../images/bouquet-1.png";

const Info = () => {
    return (
        <div className="info" id="important-info">
            <div className="picture-container">
                <img className="picture" src={infoImage} alt=""/>
            </div>
            
            <div className="information">
                <h1>Ceremony & Reception</h1>
                <h2>4:00 PM</h2>
                <h3>Brown Family Homestead</h3>
                <p>Leavenworth, WA</p>
                <p>
                    <a href="http://www.brownfamilyhomestead.com/wedding-guest-info" target={"_blank"} rel="noreferrer">
                        Directions to the venue
                    </a>
                </p>

                <h1>Important Details</h1>
                <p className="important-p">Dressy Casual Attire - It could be a little cooler in the evening so don't forget a jacket!</p>
                <p className="important-p">The venue has requested that guests not bring their dogs.</p>
                <img className="bouquet-upper" src={bouquetUpper} alt="" />
            </div>
        </div>
    );
}

export default Info;