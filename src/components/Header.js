import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState(true);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-200">
            <div className="w-32">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                />
            </div>
            <div className="flex item-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        OnlineStatus:
                        {onlineStatus ? <p>&#9989; </p> : <p>&#10060;</p>}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About US</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 ">Cart</li>
                    <button onClick={() => setBtnName(!btnName)}>
                        {btnName ? "Login" : "Logout"}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
