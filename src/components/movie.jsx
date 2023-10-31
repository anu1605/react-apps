import React, { Component } from "react";
import * as movies from "../services/fakeMovieService";
import * as genres from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: movies.getMovies(),
  };

  deleteMovie(id) {
    let newmovies = this.state.movies.filter((movie) => movie._id != id);
    this.setState({ movies: newmovies });
  }

  render() {
    let { length: movieLength } = this.state.movies;

    if (movieLength === 0) {
      document.getElementById("table").style.display = "none";
      return (
        <div className="container">
          <p>There are no movies in the database</p>
        </div>
      );
    }

    return (
      <div className="container">
        <p>{"There are " + movieLength + " in the database"}</p>
        <table id="table" className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteMovie(movie._id);
                      }}
                      className="btn btn-danger"
                    >
                      delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
