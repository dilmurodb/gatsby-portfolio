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
    <div>
      <div>
        <p>TRIVIA</p>
      </div>
      <div>
        <a
          href="https://dilmurodb.github.io/trivia/"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faBookOpen} size="7x" />
        </a>
      </div>
    </div>
    <div>
      <div>
        <p>ToDo-List</p>
      </div>
      <div>
        <a
          href="https://bukharov-todo-list.herokuapp.com/"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faTasks} size="7x" />
        </a>
      </div>
    </div>
    <div>
      <div>
        <p>TIC-TAC-TOE</p>
      </div>
      <div>
        <a
          href="https://dilmurodb.github.io/tic-tac/"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faTh} size="7x" />
        </a>
      </div>
    </div>
  </Layout>
);
export default Portfolio;
