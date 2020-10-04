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
            Hi! I'm Kelsey, a 22 year-old developer from London. I'm a budding
            front end software engineer who specialises in {""}
            <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React.js</b>, and
            learning many more! <br />
            <br />
            I'm currently completing my Master's degree in Computer Science and
            in the meantime, I enjoy creating websites for clients and working
            on my own personal projects. Feel free to browse what I've created
            and get in contact if you'd like some work done! <br />
          </p>
        </Fade>
      </Container>
      <Container fluid id="about-2" className="align-items-center p-5">
        <Container>
          <Fade bottom>
            <h4 className="bebas mb-3"> Currently working on: </h4>
            <img src={rose} id="rose-grey" className="mb-3" />
            <h5 className="bebas">Project Insight</h5>
            <p className="lato">
              A group project website aimed at students, designed to demystify
              STEM careers by providinig information in the form of interviews
              and advice pages.
            </p>
            <h5 className="bebas">Buzz</h5>
            <p className="lato">
              A social media application using React, Node, Firebase, Redux and
              Express. Coming soon!
            </p>
          </Fade>
        </Container>
      </Container>
    </div>
  );
}
