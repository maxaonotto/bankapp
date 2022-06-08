import React from "react";
import card from "../photo/Icons/card.svg";
import pension from "../photo/Icons/pension.png";
import arrow from "../photo/arrow.png";
import "./Wallets.scss";

const Wallets = ({ setWalletCount }) => {
  function changeWallet(money) {
    setWalletCount(money);
  }

  return (
    <section className="wallets">
      <section>
        <section className="title">Your accounts</section>
        <ul>
          <li className="wallets-item" onClick={() => changeWallet("€133.2")}>
            <span className="wallet-currancy">
              <span className="pre-dot"></span>
              <span className="dot eur">€</span>Euro (EUR)
            </span>
            <span className="wallet-amount">€133.20</span>
          </li>
          <li className="wallets-item" onClick={() => changeWallet("£10.00")}>
            <span className="wallet-currancy">
              <span className="pre-dot"></span>
              <span className="dot gbp">£</span>British Sterlings (GBP)
            </span>
            <span className="wallet-amount">£10.00</span>
          </li>
          <li
            className="wallets-item"
            onClick={() => changeWallet("$10234.20")}
          >
            <span className="wallet-currancy">
              <span className="pre-dot"></span>
              <span className="dot usd">$</span>US Dollar (USD)
            </span>
            <span className="wallet-amount">$10234.20</span>
          </li>
          <li className="wallets-item" onClick={() => changeWallet("₩0.00")}>
            <span className="wallet-currancy">
              <span className="pre-dot"></span>
              <span className="dot kmw">₩</span>South Korea Won (KRW)
            </span>
            <span className="wallet-amount">₩0.00</span>
          </li>
        </ul>
      </section>
      <footer>
        <section className="footer">
          <section className="footer-list">
            <section className="footer-item">
              <img className="card" alt="card" src={card} />
              <section className="footer-info">
                <span className="text">Request a Card</span>
                <span className="subtext">Get a debit card for free</span>
              </section>
              <img src={arrow} className="arrow" alt="arr" />
            </section>
            <section className="footer-item">
              <img className="pension" alt="free" src={pension} />
              <section className="footer-info">
                <span className="text">Earn £25 for free</span>
                <span className="subtext">Apply for pension</span>
              </section>
              <img src={arrow} className="arrow" alt="arr" />
            </section>
          </section>
        </section>
      </footer>
    </section>
  );
};

export default Wallets;
