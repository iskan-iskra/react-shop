import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MultiProvider } from "@layout";
import { CssBaseline } from "@mui/material";
import "./style.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MultiProvider>
        <CssBaseline />
        <App />
      </MultiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
