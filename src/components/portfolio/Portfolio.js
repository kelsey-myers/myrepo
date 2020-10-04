import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Fade from "react-reveal/Fade";

import Kelmone from "./Kelmone";
import TTTrade from "./TTTrade";
import Rahmone from "./Rahmone";

import { CSSTransition } from "react-transition-group";

export default function Portfolio() {
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
        <Fade bottom>
          <Row className="project-div-1 mb-5 align-items-center" xs={1} sm={2}>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "first" }}
              className="text-center"
            >
              <Kelmone />
            </Col>
            <Col>
              <h4 className="bebas text-center">
                {" "}
                Kelmone School of Motoring{" "}
              </h4>
              <br />
              <p className="lato text-center">
                Kelmone School of Motoring is a driving school based in
                Dartford. This is a basic single-page website with the following
                features: <br /> <br />
                - Responsive <br />
                - Built with React, HTML, CSS & JavaScript <br />
                - Contact Form with Email & Phone <br />
                - Gallery <br />
                - Social Media Links <br />
                <br />
                <a
                  href="https://kelmoneschoolofmotoring.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </p>
            </Col>
          </Row>

          <Row className="project-div-2 mb-5 align-items-center" xs={1} sm={2}>
            <Col xs={{ order: "last" }} className="text-center">
              <TTTrade />
            </Col>
            <Col>
              <h4 className="bebas text-center"> TT Trade Quotes </h4>
              <br />
              <p className="lato text-center">
                TT Trade Quotes is a quote-finding service which matches
                tradesmen with clients and vice-versa, and it is based in
                London. This is a regular package multi-page website with the
                following features: <br /> <br />
                - Built with HTML, CSS, JavaScript and PHP <br />
                - Responsive <br />
                - Registration Form <br />
                - Quote Request Form with Image Upload <br />
                - Contact Section with Phone <br />
                - Gallery <br />
                - Social Media Links <br />
                <br />
                <a
                  href="https://tttradequotes.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
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
              <Rahmone />
            </Col>
            <Col>
              <h4 className="bebas text-center"> RahmoneTK </h4>
              <br />
              <p className="lato text-center">
                RahmoneTK is a Twitch streamer and Smash Bros player. He is also
                a graphic artist and wanted a portfolio website to display his
                works. This is a regular multi-page website with the following
                features: <br /> <br />
                - Built with HTML, CSS, JavaScript and PHP <br />
                - Responsive <br />
                - Like Button <br />
                - Contact Section with Email & Phone <br />
                - Multiple Galleries <br />
                - Social Media Links <br />
                <br />
                <a
                  href="https://rahmone.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
