import React from "react";
import "./info.css"
import infoImage from "../../images/piggy-back.jpg";
import bouquetUpper from "../../images/bouquet-1.png";

const Info = () => {
    return (
        <div className="info">
            <div className="picture-container">
                <img className="picture" src={infoImage} alt=""/>
            </div>
            
            <div className="information">
                <h1>Ceremony & Reception</h1>
                <h2>4:00 PM</h2>
                <h3>Brown Family Homestead</h3>
                <p>Leavenworth, WA</p>
            
                <img className="bouquet-upper" src={bouquetUpper} alt="" />
            </div>
        </div>
    );
}

export default Info;