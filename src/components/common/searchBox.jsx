import React from "react";

const SearchBox = ({ search, onSearch }) => {
  return (
    <input
      style={{ marginBottom: "10px" }}
      type="text"
      className="form-control search-box"
      value={search}
      placeholder="Search..."
      onChange={onSearch}
    />
  );
};

export default SearchBox;
