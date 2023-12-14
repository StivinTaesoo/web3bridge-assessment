import React from "react";

function CartItem(props) {
    const { id, url, title, price } = props.data;
    return (
        <div>
            <h1>CartItem</h1>
            <div className="product-img">
                <img src={url} />
            </div>

            <div className="title">{title}</div>
            <div className="title">{price}</div>
        </div>
    );
}

export default CartItem;
