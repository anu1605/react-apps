import React from "react";

const Options = ({ name, label, onChange, errors, options, value }) => {
  return (
    <div className="input-group mb-3">
      <label style={{ width: "100%" }} htmlFor={name}>
        {label}
      </label>

      <select
        name={name}
        className="custom-select"
        id="inputGroupSelect02"
        onChange={onChange}
      >
        <option hidden value={value}>
          {value}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="input-group-append"></div>
      {errors && <div className="alert alert-danger">{errors} </div>}
    </div>
  );
};

export default Options;
