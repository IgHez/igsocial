import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeContexProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContexProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContexProvider>
  </React.StrictMode>
);
