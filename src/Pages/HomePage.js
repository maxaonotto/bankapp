import { React, useState } from "react";
import Balance from "../Components/Balance";
import Navbar from "../Components/Navbar";
import Wallets from "../Components/Wallets";

const HomePage = () => {
  const [walletCount, setWalletCount] = useState("0.00");
  return (
    <section className="container">
      <Navbar />
      <Wallets setWalletCount={setWalletCount} />
      <Balance walletCount={walletCount} />
    </section>
  );
};

export default HomePage;
