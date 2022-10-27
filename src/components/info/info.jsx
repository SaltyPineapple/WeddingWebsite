import React from "react";
import "./info.css"
import picture from "../../images/locust-kiss.jpg"

const Info = () => {
    return (
        <div className="info">
            <div className="picture">
                {/* <img src={picture} alt="" className="pic"/> */}
            </div>

            <div className="separator"></div>
            
            <div className="information">
                <h2>Ceremony</h2>
                <h3>4:00 PM</h3>
                <p>Leavenworth, WA</p>
            </div>
        </div>
    );
}

export default Info;