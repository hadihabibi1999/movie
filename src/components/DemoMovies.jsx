import React, { Component } from "react";
import { getDemoes } from "../services/fakeDemoMovies";
import { Link } from "react-router-dom";

class DemoMovies extends Component {
  state = {
    demoMovies: getDemoes(),
  };
  render() {
    return (
      <div className="demo">
        {this.state.demoMovies.map((demo) => (
          <Link  key={demo._id} style={{ textDecoration: "none" }} to={`movie/${demo._id}`}>
            <div className="clickable-demo">
              <img src={demo.url} className="each-demo" />
              <p className="each-demo-name">{demo.title}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default DemoMovies;
