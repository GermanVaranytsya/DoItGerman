import React, { Component } from "react";
import avatar from "../media/avatar.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid text-center">
          <h1 className="thickness text-black-50">About Me</h1>
          <h2 className="thickness">German Varanytsya</h2>
          <img src={avatar} className="img mx-auto d-block shadow zoom" />
        </div>
      </div>
    );
  }
}

export default About;
