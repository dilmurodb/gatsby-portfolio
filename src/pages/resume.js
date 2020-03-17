import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import resume from "../images/resume.pdf";
const Resume = () => (
  <Layout>
    <div>
      <h1>Resume</h1>
      <h2>Skills</h2>
      <p>
        JavaScript | ReactJS | MongoDB | Express | NodeJS | Mongoose |
        PostgreSQL | HTML | CSS | PeeWee | SQL | Python | Scribble | Django REST
        | Gatsby | GraphQL | Django
      </p>
      <h2>Projects</h2>
      <h4>ToDo-List</h4>
      <p>
        To Do List is the app where a user can create todo lists, check them as
        completed or uncheck, also a user can delete any item from the list.
        This app was created by using React
      </p>
      <h4>Modern Trouseau</h4>
      <p>
        Collaborated with the team of students to create a website for the
        client project. I was on the front-end team and we worked on React using
        Gatsby. The project was broken up into smaller components and every
        member of the team worked on those components. Technologies: React
        Gatsby, Django REST.
      </p>
      <h4>National Parks</h4>
      <p>
        National Parks website project was my solo project. I created both
        front-end and back-end code. Website has a list of National Parks with
        its description, location and photos. User can add to this list any
        number of National Parks, or delete them, also users can leave a message
        on each park. Technologies: Django, PSQL.
      </p>
      <h2>Education</h2>
      <p>
        General Assembly, Washington, DC (2020) Web Development Immersive
        12-­week intensive course
      </p>
      <p>
        National University of Science and Technology "MISIS" (Moscow Institute
        of Steel and Alloys) , Moscow, Russia (2013) M.S: Metallurgical
        Engineering.
      </p>
      <p>
        National University of Science and Technology "MISIS" (Moscow Institute
        of Steel and Alloys) , Moscow, Russia (2011) B.Sc: Metallurgical
        Engineering.
      </p>
      <h2>Experience</h2>
      <p>
        General Assembly, Washington, DC (2020) Web Development Immersive,
        11/2019 - present
      </p>
      <p>
        UCSUR University of Pittsburgh, Pittsburgh, PA Data Collector, 3/2019 –
        10/2019
      </p>
      <p>
        Tashkent Railway Engineering Institute, Assistant Teacher, 09/2013 –
        08/2016
      </p>
    </div>
    <div>
      <h4>Click the icon down below to download my Resume in PDF file:</h4>
      <a href={resume} download style={{ color: `black` }}>
        <FontAwesomeIcon icon={faFileDownload} size="3x" />
      </a>
    </div>
  </Layout>
);
export default Resume;
