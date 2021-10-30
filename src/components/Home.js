import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fade from "react-reveal/Fade";

import rose from "../img/rosegrey.png";

export default function Home() {
  return (
    <div>
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
            Hi! I'm Kelsey, a 23 year-old software engineer from London who
            specialises in {""} front-end engineering and UX, specifically using{" "}
            <b>JavaScript</b>, <b>React</b>, <b>Node</b> and learning many more!{" "}
            <br />
            <br />
            I'm currently completing my Master's degree in Computer Science and
            in the meantime, I enjoy designing and creating websites for clients
            and working on my own personal projects. Feel free to browse what
            I've created and get in contact if you'd like some work done! <br />
          </p>
        </Fade>
      </Container>
      <Container fluid id="about-2" className="align-items-center p-5">
        <Container>
          <Fade bottom>
            <h4 className="bebas mb-3"> Currently working on: </h4>
            <img src={rose} id="rose-grey" className="mb-3" alt="rose" />
            <h5 className="bebas">Shapely Decor</h5>
            <p className="lato">
              An e-commerce website for a client specialising in home decor.
            </p>
          </Fade>
        </Container>
      </Container>
    </div>
  );
}
