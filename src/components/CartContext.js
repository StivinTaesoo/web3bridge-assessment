import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/items";

export const CartContext = createContext(null);

const getCart = () => {
    let cart = [];
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCart());

    const getTotalAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemDetails = PRODUCTS.find(
                    (product) => product.id === Number(item)
                );
                total += cartItems[item] * itemDetails.price;
            }
        }
        return total;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateItemQty = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQty,
        getTotalAmount,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};
