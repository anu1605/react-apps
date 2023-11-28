import React from "react";

const Options = ({ name, label, onChange, errors, options, value }) => {
  return (
    <div className="input-group mb-3">
      <label style={{ width: "100%" }} htmlFor={name}>
        {label}
      </label>

      <select
        name={name}
        className="form-control"
        onChange={onChange}
        value={value}
      >
        <option hidden value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>

      <div className="input-group-append"></div>
      {errors && <div className="alert alert-danger">{errors} </div>}
    </div>
  );
};

export default Options;
