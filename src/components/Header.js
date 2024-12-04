import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnName, setBtnName] = useState(true);

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About US</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={() => setBtnName(!btnName)}>
                        {btnName ? "Login" : "Logout"}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
