import React from "react";
import { useState } from "react";
import "./headerstyles.css"

const header = () => {
    

    return(
        <div>
            <div className="hero">
                <div className="container">
                    <h1 className="headerName">Mark & Brianne</h1>
                    <div>
                        <a href="#" className="link">Location</a> 
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

export default header;