import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Fade from "react-reveal/Fade";

import TicTacToe from "./TicTacToe";
import Google from "./Google";
import ToDo from "./ToDo";
import Hive from "./Hive";

export default function Projects() {
  return (
    <div>
      <div id="projects">
        <Container className="projects-div padding-fit">
          <Fade>
            <Row className="p-3">
              <h1 className="secondary title ">
                Personal
                <span className="title text-black inline ">Projects</span>
              </h1>
            </Row>
          </Fade>
        </Container>
      </div>
      <Container fluid className="align-items-center p-5 background-white">
        <Fade bottom>
          <Row className="project-div-2 mb-5 align-items-center" xs={1} sm={2}>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "first" }}
              className="text-center"
            >
              <Hive />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Hive </h4>
              <br />
              <p className="lato text-center">
                A social media site using ReactJS, JavaScript, Node, MongoDB,
                and Express. The back-end was deployed with Heroku and the
                front-end with Netlify.
                <br />
                <br />
                <a
                  href="https://hive-km.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </p>
            </Col>
          </Row>

          <Row className="project-div-1 mb-5 align-items-center" xs={1} sm={2}>
            <Col xs={{ order: "last" }} className="text-center">
              <TicTacToe />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Tic-Tac-Toe </h4>
              <br />
              <p className="lato text-center">
                A minigame of Tic-Tac-Toe. This was the first React project I
                created! The game can be played below but it looks best on
                desktop (or desktop-mode on mobile)! <br />
                <br />
                <a
                  href="https://kelsey-myers.github.io/tic-tac-toe-react/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </p>
            </Col>
          </Row>

          <Row className="project-div-2 mb-5 align-items-center" xs={1} sm={2}>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "first" }}
              className="text-center"
            >
              <Google />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Google Homepage </h4>
              <br />
              <p className="lato text-center">
                A concept Google Search homepage created when I first started to
                code! <br />
                <br />
                <a
                  href="https://kelsey-myers.github.io/google-homepage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </p>
            </Col>
          </Row>

          <Row className="project-div-2 mb-5 align-items-center" xs={1} sm={2}>
            <Col xs={{ order: "last" }} className="text-center">
              <ToDo />
            </Col>
            <Col>
              <h4 className="bebas text-center"> To-Do List </h4>
              <br />
              <p className="lato text-center">
                A basic to-do list with limited functionality. This is something
                I made when testing out various React features for the first
                time- I'm in the process of revamping this one!
                <br />
                <br />
                <a
                  href="https://kelsey-myers.github.io/react-todo-list/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
