import React from "react";
import hero from "../images/airbnb-group.png"
import "./Hero.css"

export default function Hero(){
    return (
        <div className="hero">
            <img src={hero} alt="group" className="group" />

            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activies led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
            
        </div>
    )

}