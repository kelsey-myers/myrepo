import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default class NotFound extends React.Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 5000);
  }
  render() {
    return (
      <div className="home">
        <Container className="centering padding-fit">
          <Row>
            <Col>
              <h1 className="text-black title">
                Error <span className="secondary inline title">404</span> -
                Whoops!
              </h1>
              <h4 className="text-black">
                You've wandered into the wrong place! I'll just take you back to
                the home page...
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
