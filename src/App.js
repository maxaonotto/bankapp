import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SendPage from "./Pages/SendPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/send" element={<SendPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
