import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

//JSX => React.createElement => ReactElement - JS Object =>HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste javascript using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
