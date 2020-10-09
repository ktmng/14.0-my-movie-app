import React, { Component } from "react";
import MovieContext from "../MovieContext";
export default class MovieFullReview extends Component {
  static contextType = MovieContext;
  render() {
    const { movies = [] } = this.context;
    const { movieId } = this.props.match.params;
    console.log(movieId);
    const selectedMovie = movies.find((m) => {
      console.log("something" + m);
      return m.id === movieId;
    });
    console.log(selectedMovie);
    return (
      <div>
        <h2>{selectedMovie && selectedMovie.name}</h2>
        <p>{selectedMovie && selectedMovie.rating}/5</p>
        <p>{selectedMovie && selectedMovie.review}</p>
      </div>
    );
  }
}