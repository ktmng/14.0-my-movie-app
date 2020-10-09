import React from "react";
import { Link } from "react-router-dom";
import MovieContext from "../MovieContext";
import './MovieList.css'

export default class MovieList extends React.Component {
  static contextType = MovieContext;
  render() {
    const { movies = [] } = this.context;
    console.log(this.context);
    return (
      <section className="movie-list-main">
        <h2>All Movies</h2>
        <ul className='movie-list'>
          {movies.map((movie) => (
            <li className='movie-li'key={movie.id}>
              <Link className='movie-li-name'to={`/${movie.id}`}>{movie.name}</Link>
              <p className='movie-li-rating'>{movie.rating}/5</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}