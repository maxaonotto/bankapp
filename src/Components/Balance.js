import React from "react";
import "./Balance.scss";
import coinpig from "../photo/Icons/pig-active.svg";
import mms from "../photo/Icons/mms-active.svg";
import leo from "../photo/Profiles/leo.svg";
import monica from "../photo/Profiles/monica.png";
import check from "../photo/Icons/check.png";
import money from "../photo/Icons/money.png";
import piggy from "../photo/Icons/pig-bank.png";
import icon1 from "../photo/Profiles/icon1.png";
import icon2 from "../photo/Profiles/icon2.png";
import icon3 from "../photo/Profiles/icon3.png";
import { Link } from "react-router-dom";

const Balance = ({ walletCount }) => {
  return (
    <section className="info">
      <section>
        <section className="header">
          <section className="header-item">
            <span className="text">Balance</span>
            <span className="amount">{walletCount.money}</span>
          </section>
          <section className="button">
            <img src={coinpig} className="img" alt="pig" />
            <span className="text">Top Up</span>
          </section>
        </section>
      </section>
      <section className="transactions">
        <span className="text">Quick Transaction</span>
        <section className="donate">
          <Link to={"/send"} style={{ textDecoration: "none" }}>
            <section className="send">
              <img src={mms} alt="mms" className="icon" />
              <span className="text">Send Money</span>
            </section>
          </Link>
          <section className="friends">
            <img src={leo} alt="leo" className="photo" />
            <span className="name">Leo W.</span>
          </section>
          <section className="friends">
            <img src={monica} alt="mon" className="photo" />
            <span className="name">Monica L.</span>
          </section>
        </section>
      </section>
      <section className="inputs">
        <section className="input">
          <section className="input-item">
            <section className="input-block">
              <img src={check} alt="check" className="icon" />
              <span className="text">Account type:</span>
            </section>
            <section className="value">Personal</section>
          </section>
          <section className="input-item">
            <section className="input-block">
              <img src={money} alt="cash" className="icon" />
              <span className="text">Currancy</span>
            </section>
            <section className="value">
              {walletCount.curr}
              <span className="amount">&nbsp;{walletCount.typeof}</span>
            </section>
          </section>
        </section>
        <section className="input">
          <section className="input-item">
            <section className="input-block">
              <img src={piggy} alt="pork" className="icon" />
              <span className="text">Passive savings</span>
            </section>
            <section className="value">
              Enabled<span className="amount">&nbsp;20%</span>
            </section>
          </section>
          <section className="input-item">
            <section className="input-block">
              <section>
                <span className="text last">Share account</span>
              </section>
            </section>
            <section className="subscribers">
              <img src={icon1} alt="" className="photo" />
              <img src={icon2} alt="" className="photo" />
              <img src={icon3} alt="" className="photo" />
              <span className="rest">+2</span>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Balance;
