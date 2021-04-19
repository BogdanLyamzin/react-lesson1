import React from "react";

const HouseListItem = ({name, word, head, sword})=> {
    return (
    <li className="house-list-item">
        <h3>{name}</h3>
        <p>Девиз: {word}</p>
        <p>Глава: {head}</p>
        <p>Фамильный меч: {sword}</p>
    </li>
    )
}

export default HouseListItem;