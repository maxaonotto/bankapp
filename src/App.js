import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SendPage from "./Pages/SendPage";

function App() {
  const [walletCount, setWalletCount] = useState({
    EUR: "133.20",
    GBP: "10.00",
    USD: "10234.20",
    KWR: "0.00",
    money: "0.00",
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              walletCount={walletCount}
              setWalletCount={setWalletCount}
            />
          }
        />
        <Route
          path="/send"
          element={
            <SendPage
              walletCount={walletCount}
              setWalletCount={setWalletCount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
