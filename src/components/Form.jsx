import React, { Component } from "react";
import Joi from "joi";
import Input from "./Input";

class Form extends Component {
  onChangeHandle = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    this.changeValidate(input);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    if (error) {
      this.setState({ error });
      return;
    }
   
    //calling server
  };

  validate = () => {
    const error = {};
    const option = { abortEarly: false };
    const { error: Error } = this.schema.validate(this.state.account, option);
    if (Error)
      for (let item of Error.details) error[item.path[0]] = item.message;

    return error;
  };
  changeValidate = (input) => {
    let error = {};
    const errorMessage = {};

    const emailSchema = Joi.object({
      email: Joi.string().required(),
    });
    const passwordSchema = Joi.object({
      password: Joi.string().required(),
    });
    const rateSchema = Joi.object({
      rate: Joi.number().min(0).max(10).required(),
    });
    const movieSchema = Joi.object({
      movie: Joi.string().required(),
    });
    const value = { [input.name]: input.value };

    if (input.name === "email") error = emailSchema.validate(value);
    if (input.name === "password") error = passwordSchema.validate(value);
    if (input.name === "rate") error = rateSchema.validate(value);
    if (input.name === "movie") error = movieSchema.validate(value);

    if (error.error) errorMessage[input.name] = error.error.details[0].message;
    else errorMessage[input.name] = null;
    this.setState({ error: errorMessage });
  };
  buttonRender = (lable) => {
    return (
      <button
        onClick={this.handleSubmit}
        type="submit"
        className="btn btn-dark"
      >
        {lable}
      </button>
    );
  };
  inputRenderFirst = (name, lable, type = "text") => {
    const { account, error } = this.state;
    return (
      <Input
        type={type}
        autoFocus
        name={name}
        lable={lable}
        onChange={this.onChangeHandle}
        value={account[name]}
        error={error[name]}
      />
    );
  };
  inputRenderafter = (name, lable, onClick, type = "text") => {
    const { account, error } = this.state;
    return (
      <Input
        type={type}
        onClick={onClick}
        name={name}
        lable={lable}
        onChange={this.onChangeHandle}
        value={account[name]}
        error={error[name]}
      />
    );
  };
}

export default Form;
