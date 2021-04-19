import React from "react";
import PropTypes from "prop-types";

import "./ProductCard.css";

const ProductCard = ({title, price, stockPrice, src, reviews})=> {

    if(!title){
        return <p>Товар не найден</p>
    }

    return (
        <div className="product-card">
            <h4 className="product-card-title">{title}</h4>
            <p className={`product-card-price ${stockPrice ? "old-price": ""}`}>Цена: {price}</p>
            {stockPrice && <p className="product-card-stock-price">Акционная цена: {stockPrice}</p>}
        </div>
    )
}

export default ProductCard;

ProductCard.defaultProps = {
    src: "./empty.jpg"
}
PropTypes.array
ProductCard.PropTypes = {
    title: PropTypes.string.isRequired,
    reviews: Of(PropTypes.shape(
        {
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }
    ))
}