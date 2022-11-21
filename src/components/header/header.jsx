/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./headerstyles.css"

const Header = props => {
    const [hasScrolledDown, setHasScrolledDown] = useState(0);

    useEffect(() => {
        const onScroll = () => setHasScrolledDown(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <div>
            <div className="hero">
                <div className={hasScrolledDown > 0 ? "container" : "containerTransparent"}>
                    <h1 className="headerName">Mark & Brianne</h1>
                    <div className={hasScrolledDown > 0 ? "nav" : "navNoDisplay"}>
                        <a href="#" className="link">Important Info</a> 
                        <a href="#" className="link">Location & Stay</a>  
                        <a href="https://www.zola.com/registry/brianneandmark2023" className="link" target="_blank" rel="noreferrer">Registry</a>  
                    </div>

                </div>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeARtmyOvm_u3JNIZJWySkpdx7Cfc7v8tbQ1IOQWtXYo_VVdQ/viewform?usp=sf_link" className={hasScrolledDown > 0 ? "rsvp" : "rsvpTransparent"} target="_blank" rel="noreferrer">
                    RSVP
                </a>

                <div className="heroText">
                    <h1>We're Getting Married!</h1>
                </div>
                <div className="date">
                    <p>06.17.23</p>
                </div>
            </div>
        </div>
    );
    

}

export default Header;