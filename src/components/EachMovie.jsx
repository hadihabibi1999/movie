import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDemoes } from "../services/fakeDemoMovies";

const GetRightMovie = (id) => {
  return getDemoes().filter((e) => e._id === id);
};
const EachMovie = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="eachMovieComponent">
      <img
        data-aos="flip-left"
        className="eachMovieImg"
        src={GetRightMovie(params.id)[0].url}
      />
      <div className="eachMovieContent">
        <h2 data-aos="zoom-out" className="eachMovieTitle">
          {GetRightMovie(params.id)[0].title}
        </h2>
        <p dir="rtl" data-aos="zoom-in-down" className="eachMovieSummary">
          {GetRightMovie(params.id)[0].summary}&hellip;
        </p>
      </div>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        className="btn btn-dark m-2"
        onClick={() => navigate("/main", { replace: true })}
      >
        back
      </button>
    </div>
  );
};

export default EachMovie;
