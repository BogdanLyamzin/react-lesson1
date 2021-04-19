import React from "react";

import "./UserCard.css";

const UserCard = ({name, word, wife})=>{
    // const {name, word, wife} = props;
    return (
        <div className="user-card">
            <h3 className="user-card-title">{name}</h3>
            <p className="user-card-word">{word}</p>
            <p className="user-card-wife">{wife}</p>
        </div>
    )
}

export default UserCard;