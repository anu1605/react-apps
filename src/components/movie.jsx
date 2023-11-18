import React, { Component } from "react";
import * as moviesObject from "../services/fakeMovieService";
import Pages from "./common/pages";
import Filter from "./common/filters";
import "../movies.css";
import Movies from "./common/movies";
import { getPageContent } from "./utils/pageContent";
import { getGenres } from "../services/fakeGenreService";
import Navbar from "./navbar";
import { Route, Switch } from "react-router-dom";
import MoviesInfo from "./Movies";

class Movie extends Component {
  state = {
    movies: [],
    genre: [],
    startIndex: 0,
    noOfRows: 3,
    pageCount: 1,
    filterSelected: "All Genres",
    sortingProp: { sortItem: "title", order: 1 },
  };

  UNSAFE_componentWillMount() {
    let editMovies = moviesObject.getMovies().map((movie) => {
      return { ...movie, heartClass: "fa fa-heart-o" };
    });
    const genre = [{ _id: "all", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: editMovies, genre });
  }

  handleReset = () => {
    let editMovies = moviesObject.getMovies().map((movie) => {
      return { ...movie, heartClass: "fa fa-heart-o" };
    });

    this.setState({ movies: editMovies });
  };

  deleteMovie = (m) => {
    let { movies, startIndex, pageCount, noOfRows, filterSelected } =
      this.state;

    movies = movies.filter((movie) => movie != m);

    const filterMovies =
      filterSelected.toLowerCase() != "all genres"
        ? movies.filter((movie) => movie.genre.name === filterSelected)
        : movies;

    const noOfMovies = getPageContent(
      filterMovies,
      startIndex,
      noOfRows
    ).length;

    if (noOfMovies === 0) {
      startIndex = startIndex - noOfRows >= 0 ? startIndex - noOfRows : 0;
      pageCount = pageCount - 1;
    }

    this.setState({ movies, startIndex, pageCount });
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
    this.setState({ startIndex: 0, pageCount: 1, filterSelected: genre });
  };

  handleSorting = (sortObject) => {
    const { movies } = this.state;
    let { order, sortItem } = sortObject;

    movies.sort((a, b) => {
      const itemA = _.get(a, sortItem);
      const itemB = _.get(b, sortItem);

      if (itemA > itemB) return order;
      if (itemA < itemB) return order * -1;
    });

    this.setState({ movies, order, sortingProp: sortObject });
  };

  displayData = () => {
    let { movies, startIndex, noOfRows, filterSelected } = this.state;

    movies =
      filterSelected.toLowerCase() != "all genres"
        ? movies.filter((movie) => movie.genre.name === filterSelected)
        : movies;

    const moviesList = getPageContent(movies, startIndex, noOfRows);
    const { length } = movies;

    return { moviesList, length, movies };
  };

  render() {
    console.log("render");
    const { moviesList, length, movies } = this.displayData();
    const { genre, filterSelected, sortingProp, noOfRows, pageCount } =
      this.state;

    return (
      <div className="">
        <Navbar />
        <Switch>
          <Route path="/Movies" component={MoviesInfo}></Route>
        </Switch>

        <div className=" container">
          <div className="table-row row">
            <div className="col">
              <Filter
                onFilter={this.handleFilter}
                genres={genre}
                selectedFilter={filterSelected}
              />
            </div>
            <div className="col">
              <Movies
                movieLength={length}
                moviesList={moviesList}
                handleHeart={this.handleHeart}
                deleteMovie={this.deleteMovie}
                onSort={this.handleSorting}
                sortProperties={sortingProp}
              />
              <div className="btn-container">
                <Pages
                  onPageClick={this.handlePages}
                  movies={movies}
                  noOfRows={noOfRows}
                  page={pageCount}
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
      </div>
    );
  }
}

Movie.defaultProps = {
  name: "name",
};

export default Movie;
