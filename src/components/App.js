import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import MovieList from "./MovieList";
import MovieFullReview from "./MovieFullReview";
import MovieContext from "../MovieContext";
import config from "../config";
import "./App.css";

class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/movies`)
      .then((res) => res.json())
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  render() {
    const value = {
      movies: this.state.movies
    };
    console.log(this.state.movies);
    return (
      <MovieContext.Provider value={value}>
        <div className="App">
          <header className="header">
            <Header />
          </header>
          <main className="main">
            <Route exact path="/" component={MovieList} />
            <Route path="/:movieId" component={MovieFullReview} />
          </main>
        </div>
      </MovieContext.Provider>
    );
  }
}

export default App;

// go here:
// https://my-json-server.typicode.com/ktmng/my-movie-list-server/movies/