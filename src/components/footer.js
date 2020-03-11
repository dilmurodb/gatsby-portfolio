import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-regular-svg-icons";
import Layout from "./layout";

const Footer = () => (
  <div>
    <footer
      style={{
        background: `lightskyblue`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          height: 100,
          padding: `1.45rem 1.0875rem`
        }}
      >
        {/* <FontAwesomeIcon icon="faLinkedin" /> */}
      </div>
    </footer>
  </div>
);

export default Footer;
