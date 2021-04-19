import React from "react";
import {v4} from "uuid";

import HouseListItem from "../HouseListItem";

import "./HouseList.css";

const HouseList = ({list})=> {

    const houseElements = list.map(({id, ...props}) => <HouseListItem key={v4()} {...props} /> );

    return (
        <>
        <h2 className="house-list-title">Перечень великих домов Вестероса</h2>
        <ul className="house-list">
            {houseElements}
        </ul>
        </>
    )
}

export default HouseList;