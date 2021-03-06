import { React } from "react";
import { Link } from "react-router-dom";
import foto from "../photo/Profiles/Ellipse 14.png";
import "./Navbar.scss";
const Navbar = ({ sendMoney, pageName = "Home" }) => {
  return (
    <section
      className={
        sendMoney?.type === "sendMoney" ? "navnar-send-money" : "navbar"
      }
    >
      <section>
        <ul>
          <li
            className={
              pageName === "Home" ? "navbar-item-active" : "navbar-item"
            }
          >
            <span className="dot"></span>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <section className="navbar-button">
                <span className="navbar-img home" />
                <span className="text">Home</span>
              </section>
            </Link>
          </li>
          <li
            className={
              pageName === "Send" ? "navbar-item-active" : "navbar-item"
            }
          >
            <span className="dot"></span>
            <Link to={"/send"} style={{ textDecoration: "none" }}>
              <section className="navbar-button">
                <span className="navbar-img mms" />
                <span className="text">Send Money</span>
              </section>
            </Link>
          </li>
          <li className="navbar-item">
            <span className="dot"></span>
            <section className="navbar-button">
              <span className="navbar-img pig" />
              <span className="text">Top Up</span>
            </section>
          </li>
          <li className="navbar-item">
            <span className="dot"></span>
            <section className="navbar-button">
              <span className="navbar-img wallet" />
              <span className="text">Accounts</span>
            </section>
          </li>
        </ul>
      </section>
      <section className="profile">
        <img className="img" alt="foto" src={foto} />
        <span className="text">
          {sendMoney?.type === "sendMoney" ? "Settings" : "Profile"}
        </span>
      </section>
    </section>
  );
};

export default Navbar;
