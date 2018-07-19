import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import AboutPage from "./AboutPage";
import MainPage from "./MainPage";

class Main extends Component {
    render() {
        return (
            <HashRouter>

                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
                        <button className="navbar-toggler mr-2" type="button" data-toggle="collapse"
                                data-target="#navbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <span className="navbar-brand">Test German</span>
                        <div className="navbar-collapse collapse" id="navbar">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Main</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex flex-fill"></div>
                    </nav>

                    <div className="content pad-from-nav">
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/about" component={AboutPage}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;