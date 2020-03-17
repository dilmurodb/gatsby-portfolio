import React from "react";
import Layout from "../components/layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, fas, far);
const Contacts = () => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        height: 600,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1>Contact</h1>
      <h3>E-Mail</h3>
      <p>dilmurod.bukharov@gmail.com</p>
      <h3>Phone</h3>
      <p>Mobile Number: (412)758-1167</p>
      <div style={{ display: `flex`, flexDirection: `row` }}>
        <div style={{ marginRight: `30px` }}>
          <h4>GitHub</h4>
          <a
            href="https://github.com/dilmurodb"
            target="_blank"
            rel="noopener"
            style={{ color: `black` }}
          >
            <FontAwesomeIcon icon={["fab", "github-square"]} size="3x" />
          </a>
        </div>
        <div>
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/dilmurod-bukharov-242987168/"
            target="_blank"
            rel="noopener"
            style={{ color: `black` }}
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
          </a>
        </div>
      </div>
    </div>
  </Layout>
);
export default Contacts;
