import { Route, Switch } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import React from "react";
import UX from "./components/ux/UX";

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
            <Home />
          </Route>
          <Route path="/design-portfolio">
            <Home />
          </Route>
          <Route path="/projects">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
