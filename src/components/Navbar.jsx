import React from "react";
import rooster from "./assets/logo.png";
// import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [display, setDisplay] = React.useState(false);

  return (
    <>
      <nav>
        <input checked={display} id="nav-toggle" type="checkbox" />
        <div class="logo">
          <img src={rooster} id="hulilogo"></img>
          Huli <strong style={{ color: "#00ff00" }}> Huli</strong>
        </div>
        <ul class="links" onClick={() => setDisplay(false)}>
          <li>
            <a href="#how-to-buy">How to buy</a>
          </li>
          <li>
            <a href="#stats">Tokenomics</a>
          </li>
          {/* <li>
            <a href="#swap">Swap</a>
          </li> */}
          <li>
            <a href="#moonmap">Road Map</a>
          </li>
          <li>
            <a href="#team">Community</a>
          </li>
          <li>
            <a id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e80c-52018772" href="https://dex.hulihuli.finance" target="_blank" className="re-button cta-button is--nav-link w-button">BUY Huli Huli</a>
          </li>
        </ul>

        <label
          for="nav-toggle"
          class="icon-burger"
          onClick={display ? () => setDisplay(false) : () => setDisplay(true)}
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    </>
  );
};

export default Navbar;
