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

  getOutput() {
    let movieLength = this.state.movies.length;
    if (movieLength === 0) {
      document.getElementById("table").style.display = "none";
      return "There are no movies in the database";
    }

    return "There are " + movieLength + " in the database";
  }

  render() {
    return (
      <div className="container">
        <p>{this.getOutput()}</p>
        <table id="table" className="table">
          <tbody>
            <tr>
              <th key={"title"}>Title</th>
              <th key={"genre"}>Genre</th>
              <th key={"stock"}>Stock</th>
              <th key={"rate"}>Rate</th>
              <th></th>
            </tr>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td key={movie.title}>{movie.title}</td>
                  <td key={movie.genre.name}>{movie.genre.name}</td>
                  <td key={movie.numberInStock}>{movie.numberInStock}</td>
                  <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
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
