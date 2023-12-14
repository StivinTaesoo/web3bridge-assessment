import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to="/">StivinTaesoo</Link>
            </div>
            <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/cart">
                    Cart <MdOutlineShoppingCart />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
