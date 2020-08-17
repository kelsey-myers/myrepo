/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <Col className="content-border p-5 offset-2" >
      <h1 className="primary work-sans-200"> Contact </h1>
      <hr className="hr" />
      <br />
      <div>
      <a href="https://www.linkedin.com/in/kelseymariemyers/" target="_blank" alt="Link to LinkedIn">
        <div className="flex-center contact">
        <FontAwesomeIcon className="secondary mb-2 mr-3" icon={faLinkedin} size="3x"/>
        <p className="primary larger work-sans-300 pt-2">/in/kelseymariemyers</p>
         </div>
      </a>
      <a href="https:/twitter.com/kelseymyers_" target="_blank" alt="Link to Twitter">
        <div className="flex-center contact">
        <FontAwesomeIcon className="secondary mb-2 mr-3" icon={faTwitter} size="3x"/>
        <p className="primary larger work-sans-300 pt-2">@kelseymyers_</p>
        </div>
      </a>
      <a href="https://github.com/kelsey-myers" target="_blank" alt="Link to Github">
        <div className="flex-center contact">
        <FontAwesomeIcon className="secondary mb-2 mr-3" icon={faGithub} size="3x"/>
        <p className="primary larger work-sans-300 pt-2">kelsey-myers</p>
        </div>
      </a>
      <a href="mailto:kelseymyers0@gmail.com" target="_blank" alt="Link to Email">
        <div className="flex-center contact">
        <FontAwesomeIcon className="secondary mb-2 mr-3" icon={faEnvelope} size="3x"/>
        <p className="primary larger work-sans-300 pt-2">kelseymyers0@gmail.com</p>
        </div>
      </a>
      </div>
    </Col>
  );
}
