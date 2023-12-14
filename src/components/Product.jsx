import React from "react";
import "./style.css";

function Product(props) {
    const { id, url, title, price } = props.data;
    return (
        <div className="products-container">
            <div className="product-img">
                <img src={url} />
            </div>

            <div className="title">{title}</div>
            <div className="title">{price}</div>
            <button className="add-to-cart">Add to cart</button>
        </div>
    );
}

export default Product;
