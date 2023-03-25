import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./components/style.css";

import NavBar from "./components/NavBar";
import { getMovies } from "./services/fakeMovieService";
import Movies from "./components/Movies";
import GroupeGenres from "./components/ListGroupOfGenres";

import DemoMovies from "./components/DemoMovies";

import MiddlePart from "./components/MiddlePart";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    pageSize: 10,
    currentPage: 1,
    favMovies: [],
    toggle: true,

    movies: [],
    currentGenreSelected: null,
    selectionGenre: false,
    color: false,
    sort: {},
  };
  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };
  handleFave = () => {
    const movies = [...this.state.movies];
    const favMovies = movies.filter((e) => e.like);
    this.setState({ favMovies, toggle: false, color: true, currentPage: 1 });
  };
  handleAll = () => {
    this.setState({ toggle: true, color: false });
  };
  handleGenreSelected = (genre) => {
    this.setState({
      currentGenreSelected: genre._id,
      selectionGenre: true,
      currentPage: 1,
    });
  };
  resetCurrentPage = () => {
    this.setState({ currentPage: 1 });
  };
  handleAllMovies = () => {
    this.setState({ selectionGenre: false, currentGenreSelected: null });
  };
  handlePaginate = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const {
      movies,
      favMovies,
      toggle,
      currentGenreSelected,
      selectionGenre,
      currentPage,
      pageSize,
    } = this.state;
    return (
      <div className="main-container">
        <NavBar />

        <Contact />
        <DemoMovies />

        <MiddlePart />

        <div className="Movies">
          <GroupeGenres
            genreSelected={this.handleGenreSelected}
            currentSelectedGenre={currentGenreSelected}
            selectionGenre={selectionGenre}
            onSelectAll={this.handleAllMovies}
          />

          <Movies
            onLike={this.handleLike}
            movies={toggle ? movies : favMovies}
            liked={faHeart}
            currentSelectedGenre={currentGenreSelected}
            selectionGenre={selectionGenre}
            currentPage={currentPage}
            pageSize={pageSize}
            handlePaginate={this.handlePaginate}
            onSelectAll={this.handleAllMovies}
            onCurrentPage={this.resetCurrentPage}
          >
            <div
              data-aos="flip-down"
              style={{ position: "absolute", right: "3vw" }}
            >
              <button
                onClick={this.handleFave}
                className={
                  this.state.color
                    ? "btn m-2  btn-sm btn-info"
                    : "btn m-2  btn-sm btn-light"
                }
              >
                fav
              </button>
              <button
                onClick={this.handleAll}
                className={
                  this.state.color
                    ? "btn m-2  btn-sm btn-light"
                    : "btn m-2  btn-sm btn-info"
                }
              >
                All
              </button>
            </div>
          </Movies>
        </div>
      </div>
    );
  }
}
export default App;
