import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import MainPage from "./MainPage";
import LoginPage from "./components/LoginPage";
import DataPage from "./components/DataPage";
import ConnectPage from "./components/ConnectPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/connect"
            element={
              <Protected>
                <ConnectPage />
              </Protected>
            }
          />
          <Route
            path="/app"
            element={
              <Protected>
                <DataPage />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
