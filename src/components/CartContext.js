import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/items";

export const CartContext = createContext(null);

const getCart = () => {
    let cart = [];
    for (let i = 1; i <= PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};
