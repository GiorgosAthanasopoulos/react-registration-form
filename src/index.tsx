import React from "react";
import {createRoot, Root} from "react-dom/client";

import App from "./components/App";

import "./stylesheets/index.css";

const root: Root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
    <>
        <App/>
    </>
);