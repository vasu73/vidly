import React from "react";

import Form from "./common/form";

const Joi = require("@hapi/joi");

class LoginForm extends Form {
  doSubmit = () => {
    console.log("submit");
  };

  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  });

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
