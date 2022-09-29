import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "../App";
import { BrowserRouter, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./store/api/apiSlice";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <BrowserRouter>
      
        <App />
      </BrowserRouter>
    </Provider>
  </ApiProvider>
);
