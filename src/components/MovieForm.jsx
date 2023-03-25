import React from "react";
import Joi from "joi";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";

class MovieForm extends Form {
  state = {
    account: { movie: "", rate: "" },
    error: {},
  };

  schema = Joi.object({
    movie: Joi.string().min(2).required().label("Movie"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  });

  handlePrevInput = () => {
    const error = this.validate();
    delete error.rate;
    this.setState({ error });
  };
  render() {
    return (
      <form className="form">
        <h1 className="h1">Adding new movie ...</h1>
        {this.inputRenderFirst("movie", "Movie")}
        <div className="form-group clickable">
          <label htmlFor="Genre">Genre</label>
          <div className="selection">
            <select id="Genre" className="form-control input select clickable">
              <option value="">Action</option>
              <option value="">Comedy</option>
              <option value="">Thriller</option>
            </select>
            <FontAwesomeIcon className="selectionIcon" icon={faUpDown} />
          </div>
        </div>
        {this.inputRenderafter("rate", "Rate", this.handlePrevInput)}
        {this.buttonRender("Add")}
      </form>
    );
  }
}

export default MovieForm;
