import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import { IKImage, IKContext } from "imagekitio-react";

import UXDocs from "./UX.json";

export default function Portfolio() {
  const getImages = ({ type, imageDetails }) => (
    <Carousel indicators={false} interval={null}>
      {type === "100Days"
        ? imageDetails.map((image, index) => (
            <Carousel.Item className="mb-2" key={index}>
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
          ))
        : imageDetails.map((image, index) => {
            return (
              <Carousel.Item className="mb-2" key={index}>
                <div className="carousel-img-container">
                  <IKImage
                    path={image.link}
                    className={
                      image.orientation === "landscape"
                        ? "gallery-img-landscape-ux-other"
                        : "gallery-img-portrait-ux-other"
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

  return (
    <>
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
            {UXDocs.map((project, index) => (
              <Row
                className="project-div-1 mb-5 align-items-center"
                xs={1}
                sm={2}
                key={`ux${index}`}
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
            ))}
          </Fade>
        </IKContext>
      </Container>
    </>
  );
}
