// import React from "react";
import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class movieForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      numberInStock: "",
      dailyRentalRate: "",
      genreId: "",
    },
    errors: {},
    options: [],
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .integer()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };

  doSubmit = async () => {
    let { data } = this.state;

    saveMovie(data);
    this.props.history.push("/movie");
  };

  async populateGenres() {
    const { data: options } = await getGenres();
    // let options = data.map((genre) => genre.name + "genre");
    this.setState({ options });
  }

  async populateMovie() {
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    try {
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapMovie(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async UNSAFE_componentWillMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapMovie = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      genreId: movie.genre._id,
    };
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderOptions("genreId", "Genre", this.state.options)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default movieForm;
