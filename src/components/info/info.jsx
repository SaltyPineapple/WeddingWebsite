import React from "react";
import "./info.css"
import infoImage from "../../images/piggy-back.jpg";

const Info = () => {
    return (
        <div className="info">
            <div className="picture-container">
                <img className="picture" src={infoImage} alt=""/>
            </div>
            
            <div className="information">
                <h1>Ceremony & Reception</h1>
                <h2>4:00 PM</h2>
                <h3>Brown's Family Homestead</h3>
                <p>Leavenworth, WA</p>
                <a 
                    href="https://www.google.com/maps/place/Brown+Family+Homestead/@47.8355178,-120.767868,15z/data=!4m2!3m1!1s0x0:0x5387cb551ac9967b?sa=X&ved=2ahUKEwjNmbuXw5H7AhW4JDQIHY6LBZ0Q_BJ6BAhiEAU"
                    target={"_blank"}>
                    Map
                </a>

            </div>
        </div>
    );
}

export default Info;