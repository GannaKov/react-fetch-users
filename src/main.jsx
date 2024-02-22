import React from "react";

import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

// const root = createRoot(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  // root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-fetch-users/">
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
