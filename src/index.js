import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChatApp from "./Components/chat";

render(
  <BrowserRouter>
    <App />
    <ChatApp />
  </BrowserRouter>,
  document.querySelector("#root")
);
