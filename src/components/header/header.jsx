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
                        <a href="#location" className="link">Location</a> 
                        <a href="#" className="link">About</a> 
                        <a href="#" className="link">Registry</a> 
                        <a href="#" className="link">Registry</a> 
                        <a href="#" className="link">Important Info</a> 
                        <a href="#" className="link">Contact</a> 
                    </div>
                </div>

                <div className="heroText">
                    <h1>We're Getting Married!</h1>
                </div>
            </div>
        </div>
    );
    

}

export default Header;