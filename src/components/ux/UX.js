import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";

import { Carousel } from "react-bootstrap";
import UXDocs from "./UX.json";
/*
    In order to use the SDK, you need to provide it with a few configuration parameters. 
    The configuration parameters can be applied directly to the IKImage component or using 
    an IKContext component.
*/

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
                    className={
                      image.orientation === "landscape"
                        ? "gallery-img-landscape-ux"
                        : "gallery-img-portrait-ux"
                    }
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
        <IKContext
          publicKey="public_pi/kn7H5bAiWiIIbnWJJpXXhcUw="
          urlEndpoint="https://ik.imagekit.io/kelseymyers0"
          transformationPosition="path"
        >
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
        </IKContext>
      </Container>
    </div>
  );
}
