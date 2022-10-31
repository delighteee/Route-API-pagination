import React from "react"



function Card(props){
    return (
        <main className="card--container">
        <img src={props.imageUrl} className="card--image" alt="food" />
        <section className = "card--details">
        <div className="card--stats">
                <img src='location.png' width="5%" className="card--location" alt="food" />
                <span className="location">{props.location}</span>
                <span className="url">{props. googleMapsUrl}</span>
            </div>
            <h2 className="title">{props.title}</h2>
            <h5 className="food--name">{props.food}</h5>
            <p className="description">{props.description}</p>
        </section>
        <hr className="solid--line" />
        </main>
    )
}

export default Card;

