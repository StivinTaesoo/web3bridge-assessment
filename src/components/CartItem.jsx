import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./style.css";

function CartItem(props) {
    const { id, url, title, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateItemQty } =
        useContext(CartContext);
    return (
        <>
            <div className="cart-items">
                <div className="cart-img">
                    <img src={url} alt={title} />
                </div>

                <div className="text-wrapper">
                    <div className="title">{title}</div>
                    <div className="title">
                        <strong>#{price}</strong>
                    </div>
                    <div className="quanitity-control">
                        <button
                            className="add-btn"
                            onClick={() => removeFromCart(id)}
                        >
                            -
                        </button>
                        <input
                            value={cartItems[id]}
                            onChange={(e) =>
                                Number(updateItemQty(e.target.value), id)
                            }
                        />
                        <button
                            className="add-btn"
                            onClick={() => addToCart(id)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
