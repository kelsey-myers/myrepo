/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Row from "react-bootstrap/Row";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <div id="contact">
        <Container className="contact-div">
          <Fade>
            <Row className="p-5 beige contact-row" xs={1}>
              <h1 className="text-black text-center"> Contact </h1>
              <div>
                <a
                  href="https://www.linkedin.com/in/kelseymariemyers/"
                  target="_blank"
                  alt="Link to LinkedIn"
                >
                  <div className="flex-center contact">
                    <FontAwesomeIcon
                      className="secondary mb-2 mr-3"
                      icon={faLinkedin}
                      size="2x"
                    />
                    <p className="larger pt-2">/in/kelseymariemyers</p>
                  </div>
                </a>

                <a
                  href="https://github.com/kelsey-myers"
                  target="_blank"
                  alt="Link to Github"
                >
                  <div className="flex-center contact">
                    <FontAwesomeIcon
                      className="secondary mb-2 mr-3"
                      icon={faGithub}
                      size="2x"
                    />
                    <p className="larger pt-2">kelsey-myers</p>
                  </div>
                </a>
                <a
                  href="mailto:kelseymyers0@gmail.com"
                  target="_blank"
                  alt="Link to Email"
                >
                  <div className="flex-center contact">
                    <FontAwesomeIcon
                      className="secondary mb-2 mr-3"
                      icon={faEnvelope}
                      size="2x"
                    />
                    <p className="larger pt-2">kelseymyers0@gmail.com</p>
                  </div>
                </a>
              </div>
            </Row>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
