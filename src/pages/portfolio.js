import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 300px;
  background-color: lightskyblue;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 70vh;
    width: 30vh;
  }
  @media (max-width: 568px) {
    flex-direction: column;
    height: 100vh;
    width: 30vh;
    align-self: center;
  }
`;

const Portfolio = () => (
  <Layout>
    <div>
      <h1>Portfolio</h1>
      <p>These are some of the projects I have built so far.</p>
      <p>Please click the icons below to see my projects</p>
    </div>
    <Container>
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <p style={{ fontSize: "22px" }}>Trivia</p>
        </div>
        <div style={{ marginRight: `50px` }}>
          <a
            href="https://dilmurodb.github.io/trivia/"
            target="_blank"
            rel="noopener"
            style={{ color: `white` }}
          >
            <FontAwesomeIcon icon={faBookOpen} size="5x" />
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
          <p style={{ fontSize: "22px" }}>ToDo-List</p>
        </div>
        <div>
          <a
            href="https://bukharov-todo-list.herokuapp.com/"
            target="_blank"
            rel="noopener"
            style={{ color: `white` }}
          >
            <FontAwesomeIcon icon={faTasks} size="5x" />
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
          <p style={{ fontSize: "22px" }}>Tic-Tac-Toe</p>
        </div>
        <div style={{ marginLeft: `50px` }}>
          <a
            href="https://dilmurodb.github.io/tic-tac/"
            target="_blank"
            rel="noopener"
            style={{ color: `white` }}
          >
            <FontAwesomeIcon icon={faTh} size="5x" />
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
          <p style={{ fontSize: "22px" }}>Random Creations</p>
        </div>
        <div style={{ marginLeft: `50px` }}>
          <a
            href="https://musing-fermi-856938.netlify.com/"
            target="_blank"
            rel="noopener"
            style={{ color: `white` }}
          >
            <FontAwesomeIcon icon={faLightbulb} size="5x" />
          </a>
        </div>
      </div>
    </Container>
  </Layout>
);
export default Portfolio;
