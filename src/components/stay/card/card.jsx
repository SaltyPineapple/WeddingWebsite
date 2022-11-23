import React from "react";
import "./card.css"

const card = ({title, content}) => {

    return (
        <div className="card">
            <h1 className="stay-header">{title}</h1>
            <div className="card-line"></div>
            {content.map((item) => {
                return(
                    <p className="content" key={item.id}>
                        <a href={item.link} target={"_blank"} rel="noreferrer">{item.title}</a>
                    </p>
                )
            })}
        </div>
    );
}

export default card;