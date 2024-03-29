import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Fade from "react-reveal/Fade";

import ProjectsDoc from "./Projects.json";
import Carousel from "react-bootstrap/Carousel";
import { IKImage, IKContext } from "imagekitio-react";

export default function Projects() {
  const getImages = ({ image, imageDetails, video, videoLink, name }) => {
    if (image && video) {
      return (
        <Carousel indicators={false} interval={null}>
          <Carousel.Item>
            <div className="carousel-img-container">
              <a
                href={videoLink.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  src={videoLink.link}
                  className={
                    videoLink.orientation === "portrait"
                      ? "gallery-img-portrait-video"
                      : "gallery-img-landscape-video"
                  }
                  alt={name + " video"}
                  autoPlay
                  loop
                />
              </a>
            </div>
          </Carousel.Item>

          {imageDetails.map((image, index) => (
            <Carousel.Item className="mb-2" key={index}>
              <div className="carousel-img-container">
                <a
                  href={"https://ik.imagekit.io/kelseymyers0" + image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IKImage
                    path={image.link}
                    className={
                      image.orientation === "landscape"
                        ? "gallery-img"
                        : "gallery-img-portrait"
                    }
                    alt={name + " screenshot " + index}
                    lqip={{ active: true }}
                  />
                </a>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    } else if (image) {
      return imageDetails.length > 1 ? (
        <Carousel indicators={false} interval={null}>
          {imageDetails.map((image, index) => (
            <Carousel.Item className="mb-2" key={index}>
              <a
                href={"https://ik.imagekit.io/kelseymyers0" + image.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IKImage
                  path={image.link}
                  className={
                    image.orientation === "landscape"
                      ? "gallery-img"
                      : "gallery-img-portrait"
                  }
                  alt={name + " screenshot " + index}
                  lqip={{ active: true }}
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <a
          href={"https://ik.imagekit.io/kelseymyers0" + imageDetails[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IKImage
            path={imageDetails[0].link}
            className={
              imageDetails[0].orientation === "landscape"
                ? "gallery-img"
                : "gallery-img-portrait"
            }
            alt={name + " screenshot"}
            lqip={{ active: true }}
          />
        </a>
      );
    } else {
      return (
        <a href={videoLink.link} target="_blank" rel="noopener noreferrer">
          <video
            src={videoLink.link}
            className={
              videoLink.orientation === "portrait"
                ? "gallery-img-portrait-video"
                : "gallery-img-landscape-video"
            }
            alt={name + " video"}
            autoPlay
            loop
          />
        </a>
      );
    }
  };

  return (
    <>
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
        <IKContext
          publicKey="public_pi/kn7H5bAiWiIIbnWJJpXXhcUw="
          urlEndpoint="https://ik.imagekit.io/kelseymyers0"
          transformationPosition="path"
        >
          <Fade bottom>
            {ProjectsDoc.map((project, index) => {
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
                      {project.description +
                        " Click on each image to enlarge it in a new tab."}
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
        </IKContext>
      </Container>
    </>
  );
}
