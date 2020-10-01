import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

import profile from '../img/kelsey.jpg';

export default function About() {
  return (
    <Col className="p-3">
      <h1 className="primary work-sans-200"> About the Developer </h1>
      <hr className="hr" />
      <br />
      <img src={profile} className="profile" alt="Kelsey"/>
      <br/><br/>
      <p className="primary work-sans-300 medium">
        Hi! I'm Kelsey, a 22 year-old developer from London. I'm a budding front end software engineer who specialises in {""}
        <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React.js</b>, and learning
        many more! <br/><br/>
        I'm currently completing my Master's degree in Computer
        Science and in the
        meantime, I enjoy creating websites for clients and working on my
        own personal projects. Feel free to browse what I've created and get in
        contact if you'd like some work done! <br/><br/>
        Click on the headings to view my work!  <br/><br/>
        <b>Currently working on:</b> <br/>
        1. <b>Project Insight</b> - A group project website aimed at students, designed to demystify STEM careers by providinig information in the form of interviews and advice pages. <br/><br/>
        2. <b>Buzz</b> - A social media application using React, Node, Firebase, Redux and Express. Coming soon!    
      </p> 
  
    </Col>
  );
}
