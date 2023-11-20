import React from "react";

const Input = (props) => {
  const { name, label, value, onChange, errors } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {errors && <div className="alert alert-danger">{errors} </div>}
    </div>
  );
};

export default Input;
