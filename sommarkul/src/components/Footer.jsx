import React from "react";
import sol from "../data/img/sol.png";
import Frontpage from "./Frontpage";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="adress">Nissesgatan 14, Göteborg</p>
      <p className="kontakt">Kontakt: nisse@sommarkul.se 0707000077</p>
      <button className="iconLogInhide">
        <img src={sol} className="iconLogIn" alt="Logga in" />
      </button>
    </footer>
  );
};

export default Footer;

