import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { PRODUCTS } from "../data/items";
import CartItem from "./CartItem";

function Cart() {
    const { cartItems, getTotalAmount } = useContext(CartContext);
    const { couponExist, setCouponExist } = useState(false);
    const { userInput, setUserInput } = useState(" ");
    const totalAmount = getTotalAmount();

    let discount = totalAmount - totalAmount * 0.1;

    const handleCoupon = (ev) => {
        setUserInput(ev.target.value);
        if (userInput === "web3") {
            setCouponExist(true);
        }
    };
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

            <div className="checkout">
                <p>
                    <strong>Subtotal #{totalAmount}</strong>
                </p>
                <input
                    type="text"
                    placeholder="Enter a coupon code"
                    value={userInput}
                    onChange={handleCoupon}
                />
                <h3>Grand Total {couponExist ? discount : totalAmount}</h3>
            </div>
        </div>
    );
}

export default Cart;
