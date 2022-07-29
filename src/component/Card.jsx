import React from "react"
import "../style/Card.css"
import Star from '../images/star.png'

const Card=(props)=>{
    let badge
    if(props.openSpots === 0){
        badge="SOLD OUT"
    }else if(props.location === "Online"){
        badge="ONLINE"
    }

    return (
        <div className="card">
            {badge && <div className="card-badge">{badge}</div>}
            <img src={require(`../images/${props.coverImg}`)} className="card-image" alt=""></img>
            <div className="card-stats">
            <img src={Star} className="card-star" alt=""></img>
            <span>{props.stats.rating}</span>
            <span className="grey">({props.stats.reviewCount}) . </span>
            <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span>/ Person</p>
        </div>
    )
}

export default Card;