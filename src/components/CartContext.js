import React, { createContext } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
    return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
