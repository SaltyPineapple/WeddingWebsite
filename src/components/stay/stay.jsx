import React from "react";
import Card from "./card/card";
import "./stay.css"

const stay = () => {

    return (
        <div className="stay-container">
            <div className="stay-title">
                <h1>Find Places to Stay</h1>
            </div>
            <div className="card-container">
                    <Card title="AirBnB" content="test content" />
                    <Card title="Hotels" content="more test" />
                    <Card title="Camping" content="testy test" />
            </div>
        </div>
    );
}

export default stay;