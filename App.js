import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Namaste Javascript using JSX</h1>;

const HeadingComponent = () => (
    <div>
        <Title />
        <h1>Namaste from Functoinal Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
