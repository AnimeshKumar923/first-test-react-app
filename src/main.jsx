import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { WhatNext } from "./WhatNext.jsx";
import LearnJsx from "./LearnJsx.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Greeting />
    <WhatNext />
    <LearnJsx />
  </StrictMode>
);
