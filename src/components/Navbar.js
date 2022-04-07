import React from "react";
import airbnb from "../images/airbnb-logo.png"
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={airbnb} alt="aibnb logo"/>
        </nav>
    )
}

