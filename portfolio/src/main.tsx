import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // Import your custom CSS file if needed

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
