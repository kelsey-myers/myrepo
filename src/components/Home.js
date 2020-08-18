import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import About from './About';
import Portfolio from './portfolio/Portfolio';
import Projects from './projects/Projects';
import Contact from './Contact';

import { CSSTransition} from 'react-transition-group';
import uuid from 'uuid';




export default function Home() {
 
    
  const [current, setCurrent] = React.useState({
      id: uuid(), comp: <About />
    })
  const [inProp, setInProp] = React.useState(true);
  const [active, setActive] = React.useState({
    home: true,
    portfolio: false,
    projects: false,
    contact: false
  });


  const handleClick = (e) => {
     if (e.target.textContent === "Home") {
        setCurrent({comp: <About/>});
        setInProp(false)
        setActive({
          home: true,
          portfolio: false,
          projects: false,
          contact: false
        }) 
      
      } else if (e.target.textContent === "Portfolio") {
            setCurrent({comp: <Portfolio/>});
            setInProp(false)
            setActive({
              home: false,
              portfolio: true,
              projects: false,
              contact: false
            }) 
         
          } else if (e.target.textContent === "Projects") {
         setCurrent({comp: <Projects/>});
         setInProp(false)
         setActive({
          home: false,
          portfolio: false,
          projects: true,
          contact: false
        }) 
        
        } else {
            setCurrent({comp: <Contact/>});
            setInProp(false)
            setActive({
              home: false,
              portfolio: false,
              projects: false,
              contact: true
            }) 
          }
  }
    
  return (

    <div>
        <Navbar fixed="top" className="black bb work-sans-300">
            <Navbar.Brand className="primary work-sans-400 mx-auto">Kelsey<p className="inline secondary">Myers</p></Navbar.Brand>
        </Navbar>
        <Navbar className="black bb work-sans-300 fixed-top-2">   
        <Nav className="text-center mx-auto">
            <Nav.Link className="primary" onClick={(e) => handleClick(e)}>Home</Nav.Link>
            <Nav.Link className="primary" onClick={(e) => handleClick(e)}>Portfolio</Nav.Link>
            <Nav.Link className="primary" onClick={(e) => handleClick(e)}>Projects</Nav.Link>
            <Nav.Link className="primary" onClick={(e) => handleClick(e)}>Contact</Nav.Link>
        </Nav>
        </Navbar>
    
      <Container className="centering padding-fit">
        <Row >
          <Col>
            <h1 className="secondary title work-sans mb-0"> My<span className="title primary work-sans-200 inline">Repo</span></h1>
            <div className="text-center">
            <span class={active.home === true ? "dot-active" : "dot"}></span>
            <span class={active.portfolio === true ? "dot-active" : "dot"}></span>
            <span class={active.projects === true ? "dot-active" : "dot"}></span>
            <span class={active.contact === true ? "dot-active" : "dot"}></span>
          </div>
          </Col>
        </Row>
        <Row>
        <CSSTransition 
                in={inProp}
                classNames="item" 
                onExiting={() => setInProp(true)}
                timeout={2000}>
                {current.comp}
            </CSSTransition>
        </Row>
      </Container>
    </div>
  );
}
