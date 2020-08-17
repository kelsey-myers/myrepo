import React from "react";
import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';

import TicTacToe from './TicTacToe';
import Google from './Google';
import ToDo from './ToDo';

import { CSSTransition} from 'react-transition-group';

export default function Projects() {

  const [current, setCurrent] = React.useState({
    name: "Tic-Tac-Toe",
    comp: <TicTacToe />
  })
  const [inProp, setInProp] = React.useState(true);



  const handleSelect = (e) => {
    
    if (e === "1") {
      setCurrent({
        name: "Tic-Tac-Toe",
        comp: <TicTacToe />
      });
      setInProp(false)
    } else if (e === "2") {
      setCurrent({
        name: "Google Concept Page",
        comp: <Google />
      });
      setInProp(false)
    }  else if (e === "3") {
      setCurrent({
        name: "To-Do List",
        comp: <ToDo />
      });
      setInProp(false)
    }   
  }

  return (
    <Col className="p-5 work-sans-300 ">
      <h1 className="primary work-sans-200"> Mini Projects </h1>
      <hr className="hr" />
      <DropdownButton title={current.name} className="dropdown mb-4">
        <Dropdown.Item eventKey="1" onSelect={(eventKey) => handleSelect(eventKey)}>Tic-Tac-Toe</Dropdown.Item>
        <Dropdown.Item eventKey="2" onSelect={(eventKey) => handleSelect(eventKey)}>Google Concept Page</Dropdown.Item>
        <Dropdown.Item eventKey="3" onSelect={(eventKey) => handleSelect(eventKey)}>To-Do List</Dropdown.Item>
    </DropdownButton>
    <p className="work-sans-400 primary">Select a project above and click on the below image to enlarge it. All images were screenshotted on an iPad.</p><br/>
    <CSSTransition 
                in={inProp}
                classNames="item" 
                onExiting={() => setInProp(true)}
                timeout={3000}>
                {current.comp} 
    </CSSTransition>
    </Col>
  );
}
