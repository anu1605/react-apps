import React, { Component } from "react";
import Table from "./table";
import Like from "./like";
import { Link } from "react-router-dom";

class Movies extends Component {
  columns = [
    {
      sortItem: "title",
      label: "Title",
      content: (movie) => (
        <Link id={movie._id} to={`../movieForm/${movie._id}`}>
          {movie.title}
        </Link>
      ),
    },
    { sortItem: "genre.name", label: "Genre" },
    { sortItem: "numberInStock", label: "Stock" },
    { sortItem: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like movie={movie} onClick={this.props.handleHeart} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => {
            this.props.deleteMovie(movie);
          }}
          className="btn btn-danger"
        >
          delete
        </button>
      ),
    },
  ];

  render() {
    const { movieLength, moviesList, onSort, sortProperties } = this.props;
    if (movieLength === 0) {
      return <p>There are no movies in the database</p>;
    }

    return (
      <div className="movie-container">
        <p>{"There are " + movieLength + " in the database"}</p>
        <Table
          columns={this.columns}
          sortProperties={sortProperties}
          onSort={onSort}
          listItems={moviesList}
        />
      </div>
    );
  }
}

export default Movies;
