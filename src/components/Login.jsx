import React from "react";
import Joi from "joi";
import Form from "./Form";
import { Link } from "react-router-dom";

class Login extends Form {
  state = {
    account: { email: "", password: "" },
    error: {},
  };

  schema = Joi.object({
    email: Joi.string().min(5).required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  });

  handlePrevInput = () => {
    const error = this.validate();
    delete error.password;
    this.setState({ error });
  };

  render() {
    return (
      <div className="form-back">
        <Link
          style={{ position: "absolute", top: 0, left: 0 }}
          className="btn btn-dark m-2"
          to={"/main"}
          replace={true}
        >
          Home
        </Link>
        <form className="form">
          {this.inputRenderFirst("email", "Email")}
          {this.inputRenderafter(
            "password",
            "Password",
            this.handlePrevInput,
            "password"
          )}
          {this.buttonRender("Submit")}
        </form>
      </div>
    );
  }
}

export default Login;
