import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
   
    return (
      <div data-aos="flip-down" className="form-outline">
        <input
          type="search"
          className="form-control shadow bg-white rounded "
          placeholder="Search..."
          aria-label="Search"
          onChange={e=>this.props.onChange(e.currentTarget.value)}
        />
      </div>
    );
  }
}

export default Search;
