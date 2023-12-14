import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { PRODUCTS } from "../data/items";
import CartItem from "./CartItem";

function Cart() {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
    return (
        <div className="cart">
            <h1>Cart Items</h1>
            <div className="cart-">
                {PRODUCTS.map((item) => {
                    if (cartItems[item.id] !== 0) {
                        return <CartItem data={item} />;
                    }
                })}
            </div>
        </div>
    );
}

export default Cart;
