import { Col, Container, Row } from "react-bootstrap";

import { Fade } from "react-reveal";
import React from "react";
import rose from "../img/rosegrey.png";

export default function Home() {
  return (
    <>
      <div className="home">
        <Container className="centering padding-fit">
          <Row>
            <Col>
              <h1 className="secondary title">
                Under
                <span className="title text-black inline ">Construction</span>
              </h1>
              <p>Come back soon :)</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
