import React, { Component } from "react";
import * as moviesObject from "../services/fakeMovieService";
import Pages from "./common/pages";
import Filter from "./common/filters";
import "../movies.css";
import Movies from "./common/movies";
import { getPageContent } from "./common/utils/pageContent";
import { getGenres } from "../services/fakeGenreService";

let editMovies = moviesObject.getMovies().map((movie) => {
  return { ...movie, heartClass: "fa fa-heart-o" };
});

class Movie extends Component {
  state = {
    movies: [],
    genre: [],
    startIndex: 0,
    noOfRows: 3,
    pageCount: 1,
    filterSelected: "All Genres",
  };

  componentDidMount() {
    const genre = [{ _id: "all", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: editMovies, genre });
  }

  handleReset = () => {
    editMovies = moviesObject.getMovies().map((movie) => {
      return { ...movie, heartClass: "fa fa-heart-o" };
    });

    this.setState({ movies: editMovies });
  };

  deleteMovie = (m) => {
    let newmovies = this.state.movies.filter((movie) => movie._id != m._id);
    editMovies.pop(editMovies.indexOf(m));
    let { startIndex, noOfRows } = this.state;
    let { length } = newmovies.slice(startIndex, startIndex + noOfRows);
    if (length === 0) {
      startIndex = startIndex - noOfRows < 0 ? 0 : startIndex - noOfRows;
    }
    this.setState({ movies: newmovies, startIndex });
  };

  handleHeart = (movie) => {
    let movies = [...this.state.movies];
    const index = this.state.movies.indexOf(movie);
    if (movie.heartClass.includes("-o")) {
      movie.heartClass = movie.heartClass.replace("-o", "");
    } else {
      movie.heartClass += "-o";
    }
    movies[index] = { ...movie };
    this.setState({ movies: movies });
  };

  handlePages = (index) => {
    const startIndex = index * this.state.noOfRows;

    this.setState({ startIndex });
    this.setState({ pageCount: ++index });
  };

  handleFilter = (genre) => {
    if (genre == "All Genres") {
      this.setState({ movies: editMovies });
    } else {
      const newMovies = editMovies.filter((movie) => movie.genre.name == genre);
      this.setState({ movies: newMovies });
    }
    this.setState({ startIndex: 0, pageCount: 1, filterSelected: genre });
  };

  render() {
    let { length } = this.state.movies;
    let { movies, startIndex, noOfRows } = this.state;
    const moviesList = getPageContent(movies, startIndex, noOfRows);

    return (
      <div className="container">
        <div className="table-row row">
          <div className="col">
            <Filter
              onFilter={this.handleFilter}
              genres={this.state.genre}
              selectedFilter={this.state.filterSelected}
            />
          </div>

          <div className="col">
            <Movies
              movieLength={length}
              moviesList={moviesList}
              handleHeart={this.handleHeart}
              deleteMovie={this.deleteMovie}
            />

            <div className="btn-container">
              <Pages
                onPageClick={this.handlePages}
                movies={this.state.movies}
                noOfRows={this.state.noOfRows}
                page={this.state.pageCount}
              />
              <button
                onClick={this.handleReset}
                className="btn btn-primary reset-btn "
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
