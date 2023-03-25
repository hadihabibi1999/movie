import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Paginate } from "../utils/utilities";
import Pagination from "./Pagination";
import _ from "lodash";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Search from "./Search";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

class Movies extends Component {
  state = {
    heading: [
      { lable: "عناوین فیلم", sortLable: "title", id: 1, sorted: false },
      { lable: "ژانر", sortLable: "genre.name", id: 2, sorted: false },
      { lable: "امتیاز", sortLable: "dailyRentalRate", id: 3, sorted: false },
      { id: 4 },
    ],
    sort: {},
    searchQuery: "",
  };
  handleSort = (path) => {
    const copySort = { ...this.state.sort };
    if (copySort.path === path) {
      copySort.order = copySort.order === "asc" ? "desc" : "asc";
    } else {
      copySort.path = path;
      copySort.order = "asc";
    }
    this.setState({ sort: copySort });
    this.handleSortIcon(path);
  };

  handleSortIcon = (path) => {
    let heading = [...this.state.heading];
    const index = heading.indexOf(
      heading.filter((h) => h.sortLable === path)[0]
    );
    heading[index].sorted = heading[index].sorted === false ? true : false;
    this.setState({ heading });
  };

  renderMethod = () => {
    const {
      currentSelectedGenre,
      selectionGenre,
      movies,
      currentPage,
      pageSize,
    } = this.props;

    let filtered = [];

    if (this.state.searchQuery) {
      filtered = movies.filter((m) =>
        m.title
          .toLowerCase()
          .startsWith(this.state.searchQuery.toLocaleLowerCase())
      );
    } else {
      filtered = selectionGenre
        ? movies.filter((movie) => movie.genre._id === currentSelectedGenre)
        : movies;
    }
    const sorted = _.orderBy(
      filtered,
      [this.state.sort.path],
      [this.state.sort.order]
    );
    const Movies = Paginate(sorted, currentPage, pageSize);
    return { sorted, filtered, Movies };
  };
  handleOnChange = (query) => {
    this.props.onSelectAll();
    this.props.onCurrentPage();
    this.setState({ searchQuery: query });
  };

  resetQuery = () => {
    this.setState({ searchQuery: "" });
  };

  render() {
    const { handlePaginate, onLike, liked, currentPage, pageSize, children } =
      this.props;

    if (this.renderMethod().Movies.length === 0)
      return (
        <div className="col radius">
          <div className="search searchFailed">
            <Search onChange={this.handleOnChange} />
            {children}
            <span className="countingMovies">
              <span style={{ fontWeight: "bolder" }}>
                {this.renderMethod().filtered.length}
              </span>{" "}
              movies
            </span>
          </div>
          <h3 style={{ color: "skyblue" }}>no item selected!</h3>
        </div>
      );
    return (
      <div className="col radius">
        <div className="search">
          <Search onChange={this.handleOnChange} />
          {children}
          <div data-aos="flip-down" className="countingMovies">
            <span style={{ fontWeight: "bolder" }}>
              {this.renderMethod().filtered.length}
            </span>{" "}
            movies
          </div>
        </div>
        <table
          data-aos="fade-left"
          style={{ margin: 0 }}
          className="table table-striped table-dark text-center style-table "
        >
          <thead>
            <tr>
              {this.state.heading.map((head) => (
                <th
                  key={head.id}
                  className="clickable"
                  onClick={() => this.handleSort(head.sortLable)}
                >
                  {head.lable}
                  {head.sorted && <FontAwesomeIcon icon={faSortUp} />}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.renderMethod().Movies.map((movie) => (
              <tr key={movie._id}>
                <td style={{ padding: 8, width: "10rem" }}>
                  <Link
                    style={{ textDecoration: "none", color: "lightblue" }}
                    to={`movie/table/${movie._id}/${movie.title}`}
                  >
                    {movie.title}
                  </Link>
                </td>
                <td style={{ padding: 8, width: "10rem" }}>
                  {movie.genre.name}
                </td>
                <td style={{ padding: 8, width: "10rem" }}>
                  {movie.dailyRentalRate}
                </td>
                <td
                  style={{
                    padding: 8,
                    width: "10rem",
                    textAlign: "left",
                    width: "2rem",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon
                    style={{ cursor: "pointer", marginTop: "1.5vh" }}
                    onClick={() => onLike(movie)}
                    icon={movie.like ? liked : faHeart}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          movieCount={this.renderMethod().filtered.length}
          pageSize={pageSize}
          onPaginate={handlePaginate}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Movies;
