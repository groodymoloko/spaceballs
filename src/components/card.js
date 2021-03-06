import React from "react";
import "./card.css";

const Card = props => (
    <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
        <div className="img-container">
        <img alt={props.character} src={props.image} />
        </div>
    </div>
);

export default Card;