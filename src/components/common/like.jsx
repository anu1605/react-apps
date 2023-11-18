import React from "react";

const Like = ({ movie, onClick }) => {
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={() => onClick(movie)}
      className={movie.heartClass}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
