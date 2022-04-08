import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css" 


export default function App(){

    const experiences = data.map((experience) =>{

        return(
            <Card
                key={experience.id}
                image={experience.coverImg}
                rating = {experience.stats.rating}
                reviewCount = {experience.stats.reviewCount}
                country = {experience.location}
                title = {experience.title}
                price = {experience.price}
                openSpots={experience.openSpots}
            ></Card>
        )
    })

    return(
        <div className="container">
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="many-cards">
                {experiences}         
            </div>  
        </div>
    )
}