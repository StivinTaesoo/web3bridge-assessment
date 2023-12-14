import React, { useContext } from "react";
import "./style.css";
import { CartContext } from "./CartContext";

function Product(props) {
    const { id, url, title, price } = props.data;
    const { addToCart } = useContext(CartContext);

    return (
        <div className="products-container">
            <div className="product-img">
                <img src={url} alt={title} />
            </div>

            <div className="title">{title}</div>
            <div className="title">
                <strong>#{price}</strong>
            </div>
            <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
                Add to cart
            </button>
        </div>
    );
}

export default Product;
