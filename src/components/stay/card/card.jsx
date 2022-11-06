import React from "react";
import "./card.css"

const card = (props) => {
    return (
        <div className="card-container">
            <h1>{props.title}</h1>
            <div className="line"></div>
            <p className="content"></p>
        </div>
    );
}

export default card;