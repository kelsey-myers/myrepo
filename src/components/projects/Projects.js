import React, { useState } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Fade from "react-reveal/Fade";

import ProjectsDoc from "./Projects.json";
import Carousel from "react-bootstrap/Carousel";

export default function Projects() {
  const [projects, setProjects] = useState(ProjectsDoc);

  const getImages = (project) => {
    if (project.image) {
      if (project.imageDetails.length > 1) {
        return (
          <Carousel indicators={false} interval={null}>
            {project.imageDetails.map((image, index) => {
              return (
                <Carousel.Item className="mb-2">
                  <img
                    className={
                      image.orientation === "landscape"
                        ? "gallery-img"
                        : "gallery-img-portrait"
                    }
                    src={image.link}
                    alt={project.name + " screenshot " + index}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        );
      } else {
        return (
          <img
            src={project.imageDetails[0].link}
            className={
              project.imageDetails[0].orientation === "landscape"
                ? "gallery-img"
                : "gallery-img-portrait"
            }
            alt={project.name + " screenshot"}
          />
        );
      }
    } else {
      return (
        <video
          src={project.videoLink}
          className="gallery-img-portrait"
          alt={project.name + " video"}
          autoPlay
          loop
        />
      );
    }
  };

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
          {projects.map((project, index) => {
            return (
              <Row
                className="project-div-2 mb-5 align-items-center"
                xs={1}
                sm={2}
              >
                <Col
                  xs={{ order: "last" }}
                  sm={{ order: index % 2 === 0 ? "last" : "first" }}
                  className="text-center"
                >
                  {getImages(project)}
                </Col>
                <Col>
                  <h4 className="bebas text-center">{project.name}</h4>
                  <br />
                  <p className="lato text-center">
                    {project.description}
                    <br />
                    <br />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkDescription}
                    </a>
                  </p>
                </Col>
              </Row>
            );
          })}
        </Fade>
      </Container>
    </div>
  );
}

/* <div>
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
      <Taskade />
    </Col>
    <Col>
      <h4 className="bebas text-center">
        {" "}
        ToDo List (Revamped - WIP){" "}
      </h4>
      <br />
      <p className="lato text-center">
        A collaborative ToDo app built using full-stack technologies.
        The backend used a GraphQL API using an Apollo server, NodeJS,
        and MongoDB. The front-end used React Native. This is a revamp
        of the original ToDo list created a while back (scroll down!).
        <br />
        <br />
        <a
          href="https://github.com/kelsey-myers/taskade-app"
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
      <Tesla />
    </Col>
    <Col>
      <h4 className="bebas text-center"> Tesla App </h4>
      <br />
      <p className="lato text-center">
        My first React Native project. A replica of the Tesla homepage
        built for IOS.
        <br />
        <br />
        <a
          href="https://github.com/kelsey-myers/tesla-app"
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
</div>*/
