import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function CartItem(props) {
    const { id, url, title, price } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    return (
        <div>
            <h1>CartItem</h1>
            <div className="product-img">
                <img src={url} />
            </div>

            <div className="title">{title}</div>
            <div className="title">#{price}</div>
            <div className="quanitity-control">
                <button className="add-btn" onClick={() => removeFromCart(id)}>
                    -
                </button>
                <input type="text" value={cartItems[id]} />
                <button className="add-btn" onClick={() => addToCart(id)}>
                    +
                </button>
            </div>
        </div>
    );
}

export default CartItem;
