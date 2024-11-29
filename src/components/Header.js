import React, { useState } from "react";
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
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
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
