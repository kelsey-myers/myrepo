import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import rose from "../img/rosegrey.png";

export default function Home() {
  return (
    <>
      <div className="home">
        <Container className="centering padding-fit">
          <Row>
            <Col>
              <h1 className="secondary title">
                My
                <span className="title text-black inline ">Repo</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container id="about" className="align-items-center p-5">
        <Fade bottom>
          <h4 className="bebas text-center"> About </h4>

          <p className="text-black text-center lato">
            Hi! I'm Kelsey, a software engineer from London who specialises in{" "}
            front-end engineering and UX, specifically using Javascript
            frameworks.
            <br />
            <br />
            I enjoy designing and creating websites for clients and working on
            my own personal projects in my spare time. Feel free to browse what
            I've created and get in contact if you'd like some work done! <br />
          </p>
        </Fade>
      </Container>
      <Container fluid id="about-2" className="align-items-center p-5">
        <Container>
          <Fade bottom>
            <h4 className="bebas mb-3"> Currently working on: </h4>
            <img src={rose} id="rose-grey" className="mb-3" alt="rose" />
            <h5 className="bebas">The Survivor Project</h5>
            <p className="lato">
              A charity which was founded to provide advice and guidance on
              domestic abuse and has helped hundreds of people around the UK.
            </p>
          </Fade>
        </Container>
      </Container>
    </>
  );
}
