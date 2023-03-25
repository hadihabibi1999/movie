import React from "react";

const Input = ({ lable, name, error, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        {...props}
        className="form-control input"
        id={name}
        placeholder={`Enter ${name}`}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
