import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import About from "./About";
import MainMap from "./MainMap";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <button
              className="navbar-toggler mr-2"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <span className="navbar-brand">Test German</span>
            <div className="navbar-collapse collapse" id="navbar">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Main
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-fill" />
          </nav>
          <div className="content pad-from-nav">
            <Route exact path="/" component={MainMap} />
            <Route path="/about" component={About} />
          </div>
          <footer className="footer font-small bg-dark fixed-bottom">
            <div className="text-center py-3">
              © 2018 Copyright:
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/germanvi">
                {" "}
                German Varanytsya
              </a>
            </div>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
