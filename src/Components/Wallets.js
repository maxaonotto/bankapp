import React from "react";
import card from "../photo/Icons/card.svg";
import pension from "../photo/Icons/pension.png";
import arrow from "../photo/arrow.png";
import debit from "../photo/card-active.png";
import "./Wallets.scss";

const Wallets = ({ setWalletCount, sendMoney, walletCount }) => {
  function changeWallet(value) {
    setWalletCount({ ...walletCount, money: value });
  }

  return (
    <section className="wallets">
      <section>
        <section className="title">
          {sendMoney?.type === "sendMoney" ? (
            <section className="announcement">
              <img className="announce-card" alt="card" src={debit} />
              <span className="announce">Send Money From:</span>
            </section>
          ) : (
            "Your accounts"
          )}
        </section>
        <ul className="ul">
          <li
            className="wallets-item"
            onClick={() => changeWallet("€" + walletCount?.EUR)}
          >
            <span className="wallet-currancy">
              <span className="pre-dot"></span>
              <span className="dot eur">€</span>Euro (EUR)
            </span>
            <span className="wallet-amount">{"€" + walletCount?.EUR}</span>
          </li>
          <li
            className="wallets-item"
            onClick={() => changeWallet("£" + walletCount?.GBP)}
          >
            <span className="wallet-currancy">
              <span className="pre-dot"></span>
              <span className="dot gbp">£</span>British Sterlings (GBP)
            </span>
            <span className="wallet-amount">{"£" + walletCount?.GBP}</span>
          </li>
          <li
            className="wallets-item"
            onClick={() => changeWallet("$" + walletCount?.USD)}
          >
            <span className="wallet-currancy">
              <span className="pre-dot"></span>
              <span className="dot usd">$</span>US Dollar (USD)
            </span>
            <span className="wallet-amount">{"$" + walletCount?.USD}</span>
          </li>
          <li
            className="wallets-item"
            onClick={() => changeWallet("₩" + walletCount?.KWR)}
          >
            <span className="wallet-currancy">
              <span className="pre-dot"></span>
              <span className="dot kmw">₩</span>South Korea Won (KRW)
            </span>
            <span className="wallet-amount">{"₩" + walletCount?.KWR}</span>
          </li>
        </ul>
      </section>
      {sendMoney?.type === "sendMoney" ? (
        <></>
      ) : (
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
      )}
    </section>
  );
};

export default Wallets;
