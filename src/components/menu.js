import React from "react";
import Link from "gatsby-link";
const Menu = () => (
  <div
    style={{
      background: "black",
      paddingTop: "10px"
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      <li>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          style={{ color: "white", textDecoration: "none" }}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/resume" style={{ color: "white", textDecoration: "none" }}>
          Resume
        </Link>
      </li>
      <li>
        <Link to="/contacts" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>
      </li>
    </ul>
  </div>
);
export default Menu;
