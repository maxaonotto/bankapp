import { React, useState } from "react";
import Navbar from "../Components/Navbar";
import Wallets from "../Components/Wallets";
import mms from "../photo/Icons/mms-active.svg";

const SendPage = ({ walletCount }) => {
  const [sendMoney, setSendMoney] = useState({ type: "sendMoney" });
  return (
    <section className="send-container">
      <Navbar
        sendMoney={sendMoney}
        setSendMoney={setSendMoney}
        walletCount={walletCount}
        pageName="Send"
      />
      <Wallets
        sendMoney={sendMoney}
        setSendMoney={setSendMoney}
        walletCount={walletCount}
      />
      <section className="send-wallets">
        <img src={mms} alt="mms" className="icon" />
        <span className="send-text">Send Money</span>
      </section>
    </section>
  );
};

export default SendPage;
