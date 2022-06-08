import axios from "axios";
import { React, useEffect } from "react";
import Balance from "../Components/Balance";
import Navbar from "../Components/Navbar";
import Wallets from "../Components/Wallets";

const HomePage = ({ setWalletCount, walletCount }) => {
  useEffect(() => {
    axios
      .get("https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data", {
        headers: {
          Type: "API Key",
          Key: "x-api-key",
          Value: "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
        },
      })
      .then((res) => setWalletCount(res))
      .catch((res) => console.log(res.responce));
    // eslint-disable-next-line
  }, []);
  return (
    <section className="container">
      <Navbar pageName="Home" />
      <Wallets setWalletCount={setWalletCount} walletCount={walletCount} />
      <Balance walletCount={walletCount} />
    </section>
  );
};

export default HomePage;
