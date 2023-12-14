import React from "react";
import { PRODUCTS } from "../data/items";
import Product from "./Product";
import "./style.css";

function Home() {
    return (
        <div className="App">
            <h1>SPEC SHOPPING MALL</h1>
            <div className="products">
                {PRODUCTS.map((item) => {
                    return <Product data={item} />;
                })}
            </div>
        </div>
    );
}

export default Home;
