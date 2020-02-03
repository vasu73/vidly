import React, { Component } from "react";
import Input from "./input";
import Select from "./select";

const Joi = require("@hapi/joi");

class Form extends Component {
  state = { data: {}, errors: {} };

  handleSubmit = e => {
    e.preventDefault(); //prevents page reload

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    this.doSubmit();
  };

  validate = () => {
    console.log("validate form");
    return null;

    //disable for now
    // const options = { abortEarly: false };
    // const { error } = Joi.validate(this.state.data, this.schema, options);
    // if (!error) return null;
    // const errors = {};
    // for (let item of error.details) errors[item.path[0]] = item.message;
    // return errors;
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        //error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        type={type}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        // error={errors[name]}
      />
    );
  }
}

export default Form;
