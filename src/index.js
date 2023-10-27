import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>
    },
]);


// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router}/>
)