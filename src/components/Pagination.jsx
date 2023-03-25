import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ pageSize, movieCount, currentPage, onPaginate }) => {
  const pages = Math.ceil(movieCount / pageSize);
  if (pages === 1) return null;
  const ArrayOfPages = _.range(1, pages + 1);

  return (
    <nav

      style={{ marginRight: "3vw", marginTop: "2vh",borderCollapse:'collapse' }}
      aria-label="Page navigation example"
    >
      <ul className="pagination">
        {ArrayOfPages.map((page) => (
          <li  key={page} className="page-item">
            <a
              style={{ cursor: "pointer",boxShadow:'0 0 15px white' }}
              onClick={() => onPaginate(page)}
              className={
                page === currentPage ? "page-link active" : "page-link"
              }
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  movieCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
};

export default Pagination;
