import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
const Portfolio = () => (
  <Layout>
    <div>
      <h1>Portfolio page</h1>
      <p>All projects will go here</p>
      <p>Description of my projects</p>
    </div>
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-around`,
        height: `300px`,
        backgroundColor: `lightskyblue`
      }}
    >
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <p style={{ fontSize: "25px" }}>TRIVIA</p>
        </div>
        <div style={{ marginRight: `50px` }}>
          <a
            href="https://dilmurodb.github.io/trivia/"
            target="_blank"
            rel="noopener"
            style={{ color: `white` }}
          >
            <FontAwesomeIcon icon={faBookOpen} size="7x" />
          </a>
        </div>
      </div>
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <p style={{ fontSize: "25px" }}>ToDo-List</p>
        </div>
        <div>
          <a
            href="https://bukharov-todo-list.herokuapp.com/"
            target="_blank"
            rel="noopener"
            style={{ color: `white` }}
          >
            <FontAwesomeIcon icon={faTasks} size="7x" />
          </a>
        </div>
      </div>
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <p style={{ fontSize: "25px" }}>TIC-TAC-TOE</p>
        </div>
        <div style={{ marginLeft: `50px` }}>
          <a
            href="https://dilmurodb.github.io/tic-tac/"
            target="_blank"
            rel="noopener"
            style={{ color: `white` }}
          >
            <FontAwesomeIcon icon={faTh} size="7x" />
          </a>
        </div>
      </div>
    </div>
  </Layout>
);
export default Portfolio;
