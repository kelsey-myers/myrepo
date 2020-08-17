import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Projects() {
  return (
    <Col className="content-border p-5 offset-2" >
      <h1 className="primary work-sans-200"> Projects </h1>
      <hr className="hr" />
      <br />
      <p className="primary work-sans-300">
        Projects Page
      </p>
    </Col>
  );
}
