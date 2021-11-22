import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Fade from "react-reveal/Fade";

import { Carousel } from "react-bootstrap";
import PortfolioDocs from "./Portfolio.json";
import { IKImage, IKContext } from "imagekitio-react";

export default function Portfolio() {
  const getImages = (project) => {
    if (project.imageDetails.length > 1) {
      return (
        <Carousel indicators={false} interval={null}>
          {project.imageDetails.map((image, index) => {
            return (
              <Carousel.Item className="mb-2">
                <div className="carousel-img-container">
                  <IKImage
                    path={image.link}
                    className={"gallery-img"}
                    alt={image.alt}
                    lqip={{ active: true }}
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      );
    } else {
      return (
        <IKImage
          path={project.imageDetails[0].link}
          className={
            project.imageDetails[0].orientation === "landscape"
              ? "gallery-img-ux w-100"
              : "gallery-img-portrait-ux"
          }
          alt={project.imageDetails[0].alt}
          lqip={{ active: true }}
        />
      );
    }
  };

  return (
    <div>
      <div id="portfolio">
        <Container className="projects-div padding-fit">
          <Fade>
            <Row className="p-3">
              <h1 className="secondary title">
                Dev
                <span className="title text-black inline ">Portfolio</span>
              </h1>
            </Row>
          </Fade>
        </Container>
      </div>
      <Container fluid className="align-items-center p-5 background-white">
        <IKContext
          publicKey="public_pi/kn7H5bAiWiIIbnWJJpXXhcUw="
          urlEndpoint="https://ik.imagekit.io/kelseymyers0"
          transformationPosition="path"
        >
          <Fade bottom>
            {PortfolioDocs.map((project, index) => {
              return (
                <Row
                  key={index}
                  className="project-div-1 mb-5 align-items-center"
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
                    <p
                      dangerouslySetInnerHTML={{ __html: project.description }}
                      className="lato text-center"
                    ></p>
                    <p className="lato text-center">
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
        </IKContext>
      </Container>
    </div>
  );
}
