import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import MainPage from "./MainPage";
import LoginPage from "./components/LoginPage";
import DataPage from "./components/DataPage";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/app"
            element={
              <Protected>
                <DataPage />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
