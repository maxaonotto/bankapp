import React from "react";
import Navbar from "../Components/Navbar";
import Wallets from "../Components/Wallets";
import mms from "../photo/Icons/mms-active.svg";

const SendPage = () => {
  return (
    <section className="container">
      <Navbar />
      <Wallets />
      <section
        style={{
          height: "100vh",
          weigh: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img src={mms} alt="mms" className="icon" />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "30px",

            color: "#262626",
          }}
        >
          Send Money
        </span>
      </section>
    </section>
  );
};

export default SendPage;
