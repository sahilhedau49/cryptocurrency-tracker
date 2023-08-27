import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./components/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/app" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);
