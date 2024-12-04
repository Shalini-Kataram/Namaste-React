import React, { useState } from "react";

const User = ({ name, location }) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count:{count}</h1>
            <h2>Name:{name}</h2>
            <h4>Location:{location}</h4>
            <h4>Contact:@shalinipolapally</h4>
        </div>
    );
};

export default User;
