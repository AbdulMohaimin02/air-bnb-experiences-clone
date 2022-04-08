import React from "react";
import olympic from "../images/olympic.png"
import star from "../images/Star.png"
import "./Card.css"

export default function Card({image,rating,reviewCount,country,title,price,openSpots}){
    return(

        <div className="card">
            {openSpots===0 && <div className="card--badge">Sold Out</div>}
            <img src={require(`../../public/images/${image}`)} alt="Athlete" className="cardImg"/> 
            <div className="rating">
                <img src={star} alt="start" className="star" />
                <p>{rating} <span className="grey">({reviewCount}).{country}</span></p>
            </div>
            <div className="card-text">
                <p className="card-title">{title}</p>
                <p className="card-price"><strong>From ${price}</strong> / person</p>
            </div>
            
        </div>

    )
}