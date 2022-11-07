import React from "react";
import "./card.css"

const card = (props) => {
    return (
        <div className="card">
            <h1 className="stay-header">{props.title}</h1>
            <div className="card-line"></div>
            <p className="content">{props.content}</p>
        </div>
    );
}

export default card;