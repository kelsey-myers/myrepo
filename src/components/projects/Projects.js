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
                key={index}
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
