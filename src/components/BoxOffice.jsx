import React, { Component } from "react";
import { getBoxOfficeList } from "../services/fakeBoxOfficeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class BoxOffice extends Component {
  state = {
    boxOffice: getBoxOfficeList(),
  };

  render() {
    return (
      <div data-aos="fade-up" className="box-office clickable">
        {this.state.boxOffice.map((movie) => (
          <div
            className="box-office-item"
            key={movie.id}
            onClick={() => this.props.onHandle(movie.description)}
          >
            <img src={movie.img} className="box-office-img" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1vw",
                color: "white",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                {movie.id}.{movie.title}
              </span>
              <span>{movie.weekend}</span>
              <span>{movie.All}</span>
            </div>
            {this.props.des === movie.description && (
              <FontAwesomeIcon
                className="iconForBoxOffice"
                style={{
                  position: "absolute",
                  left: "16vw",
                  color: "white",
                  fontSize: "20px",
                }}
                icon={faArrowRight}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default BoxOffice;
