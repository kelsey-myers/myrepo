import React from "react";
import Home from "./components/Home";
import Portfolio from "./components/portfolio/Portfolio";
import UX from "./components/ux/UX";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="App" id="bootstrap-overrides">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dev-portfolio">
            <Portfolio />
          </Route>
          <Route path="/design-portfolio">
            <UX />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    );
  }
}
