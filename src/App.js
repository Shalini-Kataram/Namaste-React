import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/resturant/:resId",
                element: <ResturantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
