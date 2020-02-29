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
        <FontAwesomeIcon icon={faBookOpen} />
      </div>
    </div>
    <div>
      <div>
        <p>ToDo-List</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faTasks} />
      </div>
    </div>
    <div>
      <div>
        <p>TIC-TAC-TOE</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faTh} />
      </div>
    </div>
  </Layout>
);
export default Portfolio;
