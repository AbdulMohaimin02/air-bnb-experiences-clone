import React from "react";
import olympic from "../images/olympic.png"
import star from "../images/Star.png"
import "./Card.css"

export default function Card(props){
    return(

        <div className="card">
            <img src={olympic} alt="Athlete" className="cardImg"/> 
            <div className="rating">
                <img src={star} alt="start" className="star" />
                <p>5.0 <span className="grey">(6).USA</span></p>
            </div>
            <div className="card-text">
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
            
        </div>

    )
}