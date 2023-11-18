import React from "react";
import PropTypes from "prop-types";

const Pages = ({ movies, noOfRows, page, onPageClick }) => {
  const noOfPages = Math.ceil(movies.length / noOfRows);
  let i = 1;

  let newArray = Array.from({ length: noOfPages }, () => i++);
  if (newArray.length === 1 || newArray.length == 0) {
    return null;
  }

  return (
    <div className="page-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {newArray.map((v) => (
            <li
              key={v}
              className={v === page ? "page-item active" : "page-item"}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  onPageClick(v - 1);
                }}
              >
                {v}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pages.propTypes = {
  movies: PropTypes.array.isRequired,
  noOfRows: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default Pages;
