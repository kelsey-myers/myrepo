import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal";

import Environment from "./Environment";
import Patisserie from "./Patisserie";
import Beats from "./Beats";
import MyRepo from "./MyRepo";
import TTTradeV2 from "../portfolio/TTTradeV2";
import HundredDays from "./100Days";

export default function Portfolio() {
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
          <Row className="project-div-1 mb-5 align-items-center" xs={1} sm={2}>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "first" }}
              className="text-center"
            >
              <HundredDays />
            </Col>
            <Col>
              <h4 className="bebas text-center"> 100 Days of Design </h4>
              <br />
              <p className="lato text-center port-desc ml-auto mr-auto mb-0">
                I decided to develop my UX skills my taking part in the 100 Days
                of Design Challenge. Click on each image to enlarge it in a new
                tab.
              </p>
            </Col>
          </Row>

          <Row className="project-div-1 mb-5 align-items-center" xs={1} sm={2}>
            <Col xs={{ order: "last" }} className="text-center">
              <TTTradeV2 />
            </Col>
            <Col>
              <h4 className="bebas text-center"> TT Trade Quotes </h4>
              <br />
              <p className="lato text-center port-desc ml-auto mr-auto mb-0">
                A simple modern design for a quote-finding company, TT Trade
                Quotes. You can view the website{" "}
                <a
                  href="https://tttradequotes.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
            </Col>
          </Row>

          <Row className="project-div-1 mb-5 align-items-center" xs={1} sm={2}>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "first" }}
              className="text-center"
            >
              <MyRepo />
            </Col>
            <Col>
              <h4 className="bebas text-center"> MyRepo </h4>
              <br />
              <p className="lato text-center port-desc  ml-auto mr-auto">
                Oh hey it's my own website! This is a portfolio design which can
                easily be customised to anyone's personal taste.
              </p>
            </Col>
          </Row>

          <Row className="project-div-2 mb-5 align-items-center" xs={1} sm={2}>
            <Col xs={{ order: "last" }} className="text-center">
              <Patisserie />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Patisserie </h4>
              <br />
              <p className="lato text-center port-desc  ml-auto mr-auto">
                A few artboards from a mockup designed for a bakery client. The
                brief was to provide a light and airy theme to the website, with
                strong inspiration from French patisseries.
              </p>
            </Col>
          </Row>

          <Row className="project-div-1 mb-5 align-items-center" xs={1} sm={2}>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "first" }}
              className="text-center"
            >
              <Beats />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Beats </h4>
              <br />
              <p className="lato text-center port-desc  ml-auto mr-auto">
                A few artboards from a minimal shop theme designed by myself.
                This was made primarily for technology-oriented businesses. The
                landing page will be an autoplay video which displays the main
                product.
              </p>
            </Col>
          </Row>

          <Row className="project-div-2 mb-5 align-items-center" xs={1} sm={2}>
            <Col xs={{ order: "last" }} className="text-center">
              <Environment />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Nature </h4>
              <br />
              <p className="lato text-center port-desc  ml-auto mr-auto">
                A sample from a simple theme designed for environmental
                organisations. The inspiration here was nature, simplicity, and
                shades of green!
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
