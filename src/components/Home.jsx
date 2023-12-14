import React from "react";
import { PRODUCTS } from "../data/items";

function Home() {
    return (
        <div className="App">
            <h1>SPEC SHOPPING MALL</h1>
            <div className="products">
                {PRODUCTS.map((item) => {
                    return (
                        <>
                            <img src={item.url} />
                            <div className="title">{item.title}</div>
                            <div className="add-to-cart">Add to cart</div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
