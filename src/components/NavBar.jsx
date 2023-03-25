import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const NavBar = ({ counters, onReset, children }) => {
  return (
    <nav className="navbar" data-aos="fade-down">
      <div
        className="container-fluid "
        style={{ justifyContent: "space-between" }}
      >
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <div className="brand clickable">
            <img src={require("../assets/logo.png")} width={65} />
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "lighter",
                margin: ".5vh 0 0 .5vw",
              }}
            >
              Movies Webpage
            </h1>
          </div>
        </Link>
        <Link className="anker" style={{position:'absolute',right:'10vw'}} to={"/premium-account"}>
          Premium
        </Link>
        {/*    <a className="navbar-brand d-flex flex-row p-2">{counters} item</a> */}
        {/*    <button
          onClick={onReset}
          className="btn btn-warning btn-sm m-2 text-secondary"
        >
          reset
        </button> */}

        {/*   <Link className="anker" style={{ marginLeft: "4vw" }} to="/About-me">
          About Me
        </Link> */}
        <Link className="anker login" to="/log-in">
          Login
        </Link>
        {children}
      </div>
    </nav>
  );
};
export default NavBar;
