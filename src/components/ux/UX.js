import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal";

import { Carousel } from "react-bootstrap";
import UXDocs from "./UX.json";

export default function Portfolio() {
  const getImages = (project) => {
    if (project.imageDetails.length > 1) {
      return (
        <Carousel indicators={false} interval={null}>
          {project.imageDetails.map((image, index) => {
            return (
              <Carousel.Item className="mb-2">
                <img
                  className={
                    image.orientation === "landscape"
                      ? "gallery-img-ux w-100"
                      : "gallery-img-ux"
                  }
                  src={image.link}
                  alt={image.alt}
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
              ? "gallery-img-ux w-100"
              : "gallery-img-portrait-ux"
          }
          alt={project.imageDetails[0].alt}
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
                Design
                <span className="title text-black inline ">Portfolio</span>
              </h1>
            </Row>
          </Fade>
        </Container>
      </div>
      <Container fluid className="align-items-center p-5 background-white ">
        <Fade bottom>
          {UXDocs.map((project, index) => {
            return (
              <Row
                className="project-div-1 mb-5 align-items-center"
                xs={1}
                sm={2}
                key={index}
              >
                <Col
                  xs={{ order: "last" }}
                  sm={{ order: index % 2 === 0 ? "last" : "first" }}
                  className="text-center"
                >
                  {getImages(project)}
                </Col>
                <Col>
                  <h4 className="bebas text-center"> {project.name} </h4>
                  <br />
                  <p className="lato text-center port-desc ml-auto mr-auto mb-0">
                    {project.description}
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
