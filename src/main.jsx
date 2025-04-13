import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./components/Greeting.jsx";
import { WhatNext } from "./components/WhatNext.jsx";
import LearnJsx from "./components/LearnJsx.jsx";
import Clock from "./components/BerserkTime.jsx";
import ClockFixed from "./components/BerserkTimeFixed.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Greeting />
    <WhatNext />
    <LearnJsx />
    {/* <Clock /> */}
    <ClockFixed />
  </StrictMode>
);
