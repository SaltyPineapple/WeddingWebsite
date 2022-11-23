import React from "react";
import "./rsvpmobile.css";

const rsvpmobile = () => {

    return (
        <div className="rsvp-mobile">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeARtmyOvm_u3JNIZJWySkpdx7Cfc7v8tbQ1IOQWtXYo_VVdQ/viewform?usp=sf_link" target={"_blank"} rel="noreferrer">
                <button className="rsvp-mobile-button">
                    RSVP
                </button>
            </a>
            <a href="https://www.zola.com/registry/brianneandmark2023" target={"_blank"} rel="noreferrer">
                <button className="rsvp-mobile-button">
                    Registry
                </button>
            </a>
        </div>
    );
}

export default rsvpmobile; 