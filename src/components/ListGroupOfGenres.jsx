import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init()


class GroupeGenres extends Component {
  state = {
    genres: getGenres(),
  };
  render() {
    const { onSelectAll, selectionGenre, genreSelected, currentSelectedGenre } =
      this.props;
    return (
      <div className="design-group" data-aos='fade-zoom'>
        <ul className="list-group">
          <li
            onClick={onSelectAll}
            style={{ cursor: "pointer" }}
            className={
              selectionGenre ? "list-group-item" : "list-group-item active"
            }
          >
            All
          </li>
          {this.state.genres.map((genre) => (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => genreSelected(genre)}
              key={genre._id}
              className={
                currentSelectedGenre === genre._id
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {genre.name}
            </li>
          ))}
        </ul>

     {/*    <Link className="anker new-movie" to={"/new-movie"}>
          new movie
        </Link> */}
      </div>
    );
  }
}

export default GroupeGenres;
